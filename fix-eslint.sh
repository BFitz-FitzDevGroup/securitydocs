#!/bin/bash

# Quick fix for the most common ESLint errors in SecurityDocs

echo "🔧 Fixing ESLint errors in SecurityDocs..."

# Fix 1: Replace unescaped quotes with HTML entities
echo "📝 Fixing unescaped quotes..."

# Replace apostrophes
find src/ -name "*.tsx" -exec sed -i '' "s/don't/don&apos;t/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/won't/won&apos;t/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/can't/can&apos;t/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/isn't/isn&apos;t/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/doesn't/doesn&apos;t/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/it's/it&apos;s/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/you're/you&apos;re/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/we're/we&apos;re/g" {} \;
find src/ -name "*.tsx" -exec sed -i '' "s/they're/they&apos;re/g" {} \;

# Replace double quotes in specific contexts
find src/ -name "*.tsx" -exec sed -i '' 's/"SOC 2"/"SOC 2"/g' {} \;
find src/ -name "*.tsx" -exec sed -i '' 's/"Type I"/"Type I"/g' {} \;
find src/ -name "*.tsx" -exec sed -i '' 's/"Type II"/"Type II"/g' {} \;

echo "🗑️  Removing unused imports..."

# Fix 2: Remove unused imports (basic patterns)
find src/ -name "*.tsx" -exec sed -i '' '/import.*{.*BookOpen.*}.*lucide-react/s/BookOpen, *//g' {} \;
find src/ -name "*.tsx" -exec sed -i '' '/import.*{.*Download.*}.*lucide-react/s/Download, *//g' {} \;
find src/ -name "*.tsx" -exec sed -i '' '/import.*{.*Star.*}.*lucide-react/s/Star, *//g' {} \;
find src/ -name "*.tsx" -exec sed -i '' '/import.*{.*ExternalLink.*}.*lucide-react/s/ExternalLink, *//g' {} \;

echo "✅ Basic fixes complete!"
echo "🚀 Try running: npm run build"
echo ""
echo "💡 If you still get errors, you can:"
echo "   1. Add eslint.ignoreDuringBuilds: true to next.config.js"
echo "   2. Or manually fix remaining issues"
