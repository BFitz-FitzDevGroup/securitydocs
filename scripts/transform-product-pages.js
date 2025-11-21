const fs = require('fs');
const path = require('path');

// Parse products.ts to extract product data
function getProductData(slug) {
  try {
    const productsPath = path.join(__dirname, '..', 'src', 'lib', 'products.ts');
    const productsContent = fs.readFileSync(productsPath, 'utf8');
    
    // Find the product in the products array
    // Look for the product object with matching slug
    const productRegex = new RegExp(`{[^}]*slug:\\s*['"]${slug}['"][^}]*}`, 's');
    const matches = productsContent.match(new RegExp(`{[^}]*slug:\\s*['"]${slug}['"][^}]*?(?=},|}\s*];)`, 'gs'));
    
    if (!matches || matches.length === 0) {
      console.warn(`⚠️  Could not find product data for: ${slug}`);
      return null;
    }
    
    const productText = matches[0];
    
    // Extract fields
    const nameMatch = productText.match(/name:\s*['"]([^'"]+)['"]/);
    const descMatch = productText.match(/description:\s*['"]([^'"]+)['"]/);
    const typeMatch = productText.match(/type:\s*['"]([^'"]+)['"]/);
    const priceMatch = productText.match(/price:\s*(\d+\.?\d*)/);
    
    return {
      name: nameMatch ? nameMatch[1] : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: descMatch ? descMatch[1] : '',
      type: typeMatch ? typeMatch[1] : 'template',
      price: priceMatch ? parseFloat(priceMatch[1]) : 14.95
    };
  } catch (error) {
    console.error(`❌ Error reading product data for ${slug}:`, error.message);
    return null;
  }
}

// Convert slug to PascalCase for component name
function slugToPascalCase(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Generate the client component file content
function generateClientComponent(originalContent, componentName) {
  // Remove "use client" from the top (we'll add it back)
  let content = originalContent.replace(/^["']use client["']\s*\n?/m, '').trim();
  
  // Find and replace the component declaration
  // Look for: export default function ComponentName
  // Or: const ComponentName = () =>
  // Or: function ComponentName()
  
  const patterns = [
    { regex: /export\s+default\s+function\s+\w+/, replacement: `export function ${componentName}` },
    { regex: /const\s+\w+\s*=\s*\([^)]*\)\s*=>/, replacement: `export function ${componentName}()` },
    { regex: /function\s+\w+\s*\([^)]*\)/, replacement: `export function ${componentName}()` }
  ];
  
  for (const pattern of patterns) {
    if (pattern.regex.test(content)) {
      content = content.replace(pattern.regex, pattern.replacement);
      break;
    }
  }
  
  // Remove any standalone "export default ComponentName" at the end
  content = content.replace(/\nexport\s+default\s+\w+;?\s*$/m, '').trim();
  
  // Add "use client" at the top
  return `"use client"\n${content}`;
}

// Generate the server wrapper page.tsx content
function generateServerWrapper(componentName, slug, productData) {
  const productType = productData?.type || 'template';
  const typeLabel = productType === 'policy' ? 'Policy Template' : 
                    productType === 'evidence' ? 'Evidence Explanation' : 
                    'Document Template';
  
  // Create a clean description for metadata (first 160 chars)
  let metaDescription = productData?.description || `Professional ${typeLabel} for SOC 2 compliance`;
  if (metaDescription.length > 160) {
    metaDescription = metaDescription.substring(0, 157) + '...';
  }
  
  return `import type { Metadata } from 'next';
import { ${componentName} } from './${componentName}';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '${productData?.name || slug.replace(/-/g, ' ')}',
    description: '${metaDescription.replace(/'/g, "\\'")}',
    alternates: {
      canonical: '/products/${slug}'
    },
    keywords: ['SOC 2', 'compliance', '${productType}', 'template', 'audit', 'security'],
  };
}

export default function ${slugToPascalCase(slug)}Page() {
  return <${componentName} />;
}
`;
}

// Transform a single product page
function transformProductPage(productSlug, dryRun = false) {
  const productDir = path.join(__dirname, '..', 'src', 'app', 'products', productSlug);
  const pagePath = path.join(productDir, 'page.tsx');
  
  // Check if page.tsx exists
  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  Skipped: ${productSlug} (no page.tsx found)`);
    return { skipped: true, reason: 'No page.tsx' };
  }
  
  // Read the current page.tsx
  const currentContent = fs.readFileSync(pagePath, 'utf8');
  
  // Check if it uses "use client"
  if (!currentContent.includes('"use client"') && !currentContent.includes("'use client'")) {
    console.log(`⏭️  Skipped: ${productSlug} (no "use client")`);
    return { skipped: true, reason: 'Not a client component' };
  }
  
  // Check if already transformed (has generateMetadata)
  if (currentContent.includes('generateMetadata') || currentContent.includes('Client')) {
    console.log(`⏭️  Skipped: ${productSlug} (already transformed)`);
    return { skipped: true, reason: 'Already transformed' };
  }
  
  // Get product data
  const productData = getProductData(productSlug);
  
  // Generate component name
  const componentName = `${slugToPascalCase(productSlug)}Client`;
  const clientFileName = `${componentName}.tsx`;
  const clientFilePath = path.join(productDir, clientFileName);
  
  // Generate new file contents
  const clientContent = generateClientComponent(currentContent, componentName);
  const serverContent = generateServerWrapper(componentName, productSlug, productData);
  
  if (dryRun) {
    console.log(`\n🔍 DRY RUN: ${productSlug}`);
    console.log(`   Would create: ${clientFileName}`);
    console.log(`   Would update: page.tsx`);
    console.log(`   Component name: ${componentName}`);
    console.log(`   Product data:`, productData ? '✅ Found' : '❌ Not found');
    if (productData) {
      console.log(`   Name: ${productData.name}`);
      console.log(`   Type: ${productData.type}`);
    }
    return { dryRun: true, slug: productSlug };
  }
  
  // Write the files
  try {
    // Create client component file
    fs.writeFileSync(clientFilePath, clientContent, 'utf8');
    
    // Update page.tsx
    fs.writeFileSync(pagePath, serverContent, 'utf8');
    
    console.log(`✅ Transformed: ${productSlug}`);
    return { success: true, slug: productSlug };
  } catch (error) {
    console.error(`❌ Error transforming ${productSlug}:`, error.message);
    return { error: true, slug: productSlug, message: error.message };
  }
}

// Find all product directories
function findProductDirectories() {
  const productsDir = path.join(__dirname, '..', 'src', 'app', 'products');
  const items = fs.readdirSync(productsDir);
  
  // Exclude category/bundle pages
  const excludedPages = [
    'bundles', 'comparison', 'complete-bundle', 'document-bundle', 
    'documents', 'evidence', 'evidence-bundle', 'policies', 'policy-bundle', 'page.tsx'
  ];
  
  return items.filter(item => {
    if (excludedPages.includes(item)) return false;
    
    const itemPath = path.join(productsDir, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();
    const hasPageFile = fs.existsSync(path.join(itemPath, 'page.tsx'));
    return isDirectory && hasPageFile;
  });
}

// Main function
function main() {
  const args = process.argv.slice(2);
  const targetSlug = args.find(arg => !arg.startsWith('--'));
  const dryRun = args.includes('--dry-run');
  
  console.log('🔧 Product Pages Transformation Script\n');
  
  if (dryRun) {
    console.log('📋 DRY RUN MODE - No files will be modified\n');
  }
  
  let products = [];
  
  if (targetSlug) {
    console.log(`🎯 Target: ${targetSlug}\n`);
    products = [targetSlug];
  } else {
    console.log('🔍 Finding all product pages...');
    products = findProductDirectories();
    console.log(`📄 Found ${products.length} product pages\n`);
    
    if (!dryRun) {
      console.log('⚠️  WARNING: This will transform ALL product pages!');
      console.log('   Press Ctrl+C to cancel, or wait 3 seconds to continue...\n');
      
      // Give user time to cancel
      const start = Date.now();
      while (Date.now() - start < 3000) {
        // Wait
      }
    }
  }
  
  // Transform products
  let transformed = 0;
  let skipped = 0;
  let errors = 0;
  let dryRunCount = 0;
  
  for (const slug of products) {
    const result = transformProductPage(slug, dryRun);
    
    if (result.success) transformed++;
    else if (result.skipped) skipped++;
    else if (result.error) errors++;
    else if (result.dryRun) dryRunCount++;
  }
  
  // Summary
  console.log(`\n📊 Summary:`);
  if (dryRun) {
    console.log(`   🔍 Dry run completed: ${dryRunCount} products`);
    console.log(`   ⏭️  Would skip: ${skipped}`);
  } else {
    console.log(`   ✅ Transformed: ${transformed}`);
    console.log(`   ⏭️  Skipped: ${skipped}`);
    console.log(`   ❌ Errors: ${errors}`);
  }
  
  console.log(`\n✨ Done!`);
  
  if (!dryRun && transformed > 0) {
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Run: npm run dev`);
    console.log(`   2. Test a few product pages`);
    console.log(`   3. Run: npm run build`);
    console.log(`   4. If successful: git add . && git commit && git push`);
  }
}

// Run it
main();