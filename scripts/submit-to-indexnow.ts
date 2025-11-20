import dotenv from 'dotenv';

// Load environment variables from .env.local
const result = dotenv.config({ path: '.env.local' });

console.log('🔍 Dotenv result:', result.error ? result.error : 'Success');
console.log('🔑 Key from env:', process.env.INDEXNOW_API_KEY ? 'Found' : 'NOT FOUND');

import { submitToIndexNow } from '../src/lib/indexnow';

const urls = [
  'https://security-docs.com/blog/saas-soc2-compliance-guide',
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