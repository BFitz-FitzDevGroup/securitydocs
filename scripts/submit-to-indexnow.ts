import { submitToIndexNow } from '../src/lib/indexnow';

const urls = [
  'https://security-docs.com/blog/what-is-compliance',
  'https://security-docs.com/blog/soc2-type1-vs-type2',
  'https://security-docs.com/blog/compliance-certifications-comparison',
  'https://security-docs.com/blog/soc2-preparation-90-days',
];

console.log('🚀 Submitting URLs to IndexNow...');

submitToIndexNow(urls)
  .then((success) => {
    if (success) {
      console.log('✅ IndexNow submission complete');
      process.exit(0);
    } else {
      console.error('❌ IndexNow submission failed');
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
  });