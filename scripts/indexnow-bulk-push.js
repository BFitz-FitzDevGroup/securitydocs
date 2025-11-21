const https = require('https');

// Your IndexNow key
const INDEXNOW_KEY = 'd639e9bd3a574272ad2e9d079ae7e9e9';
const DOMAIN = 'security-docs.com';
const KEY_LOCATION = `https://${DOMAIN}/${INDEXNOW_KEY}.txt`;

// All your page URLs
const urls = [
  // Homepage
  'https://security-docs.com/',
  
  // Main category pages
  'https://security-docs.com/products',
  'https://security-docs.com/resources',
  'https://security-docs.com/blog',
  'https://security-docs.com/about',
  'https://security-docs.com/contact',
  
  // Legal pages
  'https://security-docs.com/legal',
  'https://security-docs.com/legal/privacy',
  'https://security-docs.com/legal/terms',
  'https://security-docs.com/legal/refund-policy',
  
  // Bundle pages (PRIORITY)
  'https://security-docs.com/products/complete-bundle',
  'https://security-docs.com/products/policy-bundle',
  'https://security-docs.com/products/document-bundle',
  'https://security-docs.com/products/evidence-bundle',
  'https://security-docs.com/products/bundles',
  
  // Category pages
  'https://security-docs.com/products/policies',
  'https://security-docs.com/products/documents',
  'https://security-docs.com/products/evidence',
  'https://security-docs.com/products/comparison',
  
  // Resource pages
  'https://security-docs.com/resources/soc2-primer',
  'https://security-docs.com/resources/soc2-checklist',
  'https://security-docs.com/resources/implementation-guides',
  'https://security-docs.com/resources/cost-calculator',
  
  // Individual product pages - Policies (19)
  'https://security-docs.com/products/acceptable-use-policy',
  'https://security-docs.com/products/access-control-policy',
  'https://security-docs.com/products/asset-management-policy',
  'https://security-docs.com/products/business-resilience-and-recovery-plan-policy',
  'https://security-docs.com/products/change-management-policy',
  'https://security-docs.com/products/code-of-conduct-policy',
  'https://security-docs.com/products/cryptography-policy',
  'https://security-docs.com/products/data-management-policy',
  'https://security-docs.com/products/human-resources-security-policy',
  'https://security-docs.com/products/incident-response-plan-policy',
  'https://security-docs.com/products/information-security-policy',
  'https://security-docs.com/products/information-security-roles-and-responsibilities',
  'https://security-docs.com/products/network-security-policy',
  'https://security-docs.com/products/operations-security-policy',
  'https://security-docs.com/products/physical-security-policy',
  'https://security-docs.com/products/privacy-policy',
  'https://security-docs.com/products/risk-management-policy',
  'https://security-docs.com/products/secure-development-policy',
  'https://security-docs.com/products/third-party-management-policy',
  
  // Individual product pages - Documents (35)
  'https://security-docs.com/products/access-request-ticket-form-template',
  'https://security-docs.com/products/access-review-ticket-form',
  'https://security-docs.com/products/asset-inventory-template',
  'https://security-docs.com/products/board-of-directors-charter-template',
  'https://security-docs.com/products/certificate-of-destruction-external-template',
  'https://security-docs.com/products/certificate-of-destruction-internal-template',
  'https://security-docs.com/products/change-request-form',
  'https://security-docs.com/products/consulting-services-agreement-template',
  'https://security-docs.com/products/employee-confidentiality-agreement-template',
  'https://security-docs.com/products/employee-performance-review-form',
  'https://security-docs.com/products/employee-termination-checklist-template',
  'https://security-docs.com/products/ethical-management-survey-template',
  'https://security-docs.com/products/gdpr-sample-company-privacy-policy',
  'https://security-docs.com/products/incident-response-program-template',
  'https://security-docs.com/products/network-diagram',
  'https://security-docs.com/products/physical-security-implementation-checklists',
  'https://security-docs.com/products/policy-acknowledgement-form',
  'https://security-docs.com/products/risk-register-template',
  'https://security-docs.com/products/risk-scenario-identification-template',
  'https://security-docs.com/products/sample-acceptable-use-policy',
  'https://security-docs.com/products/sample-business-continuity-plan',
  'https://security-docs.com/products/sample-company-security-program-document',
  'https://security-docs.com/products/sample-company-security-program-template',
  'https://security-docs.com/products/sample-disaster-recovery-tabletop-exercise-template',
  'https://security-docs.com/products/sample-incident-tabletop-exercise-template',
  'https://security-docs.com/products/sample-job-descriptions-for-key-security-roles-document',
  'https://security-docs.com/products/sample-responsible-disclosure-policy-template',
  'https://security-docs.com/products/sample-subscription-terms-of-service-document',
  'https://security-docs.com/products/sample-whistleblower-policy-document',
  'https://security-docs.com/products/security-incident-report-template',
  'https://security-docs.com/products/training-completion-tracking-template',
  'https://security-docs.com/products/user-onboarding-checklist',
  'https://security-docs.com/products/vendor-inventory-template',
  'https://security-docs.com/products/vendor-security-assessment-questionnaire',
  'https://security-docs.com/products/vulnerability-tracking-template',
  
  // Individual product pages - Evidence (43)
  'https://security-docs.com/products/acceptable-use-monitoring-evidence',
  'https://security-docs.com/products/access-review-completed',
  'https://security-docs.com/products/anonymous-whistleblower-channel-evidence',
  'https://security-docs.com/products/application-status-page-evidence',
  'https://security-docs.com/products/board-meeting-minutes-agenda-evidence',
  'https://security-docs.com/products/board-of-directors-cvs-evidence',
  'https://security-docs.com/products/board-of-directors-charter-evidence',
  'https://security-docs.com/products/ci-cd-system-evidence',
  'https://security-docs.com/products/company-org-chart-evidence',
  'https://security-docs.com/products/confidentiality-agreement-evidence',
  'https://security-docs.com/products/contractor-agreement-evidence',
  'https://security-docs.com/products/customer-data-deletion-record-evidence',
  'https://security-docs.com/products/customer-support-site-evidence',
  'https://security-docs.com/products/cybersecurity-insurance-policy-evidence',
  'https://security-docs.com/products/disaster-recovery-tabletop-exercise-evidence',
  'https://security-docs.com/products/employee-agreements-evidence',
  'https://security-docs.com/products/employee-background-checks-evidence',
  'https://security-docs.com/products/employee-performance-evaluations-evidence',
  'https://security-docs.com/products/employee-termination-checklist',
  'https://security-docs.com/products/employee-termination-security-policy-evidence',
  'https://security-docs.com/products/identifying-risk-scenarios-evidence',
  'https://security-docs.com/products/incident-response-plan-test-evidence',
  'https://security-docs.com/products/incident-root-cause-analysis-evidence',
  'https://security-docs.com/products/internal-communication-of-system-updates-evidence',
  'https://security-docs.com/products/intrusion-detection-system-evidence',
  'https://security-docs.com/products/key-security-role-job-descriptions-evidence',
  'https://security-docs.com/products/master-services-agreement-evidence',
  'https://security-docs.com/products/media-device-disposal-completed-evidence',
  'https://security-docs.com/products/network-diagram-evidence',
  'https://security-docs.com/products/network-segregation-evidence',
  'https://security-docs.com/products/penetration-test-remediation-evidence',
  'https://security-docs.com/products/penetration-testing-report-evidence',
  'https://security-docs.com/products/policy-acknowledgement-evidence',
  'https://security-docs.com/products/product-documentation-site-evidence',
  'https://security-docs.com/products/publicly-available-change-logs-evidence',
  'https://security-docs.com/products/publicly-available-privacy-policy-evidence',
  'https://security-docs.com/products/publicly-available-security-information-page-evidence',
  'https://security-docs.com/products/publicly-available-terms-of-service-evidence',
  'https://security-docs.com/products/removable-media-encryption-evidence',
  'https://security-docs.com/products/soc-2-system-description-evidence',
  'https://security-docs.com/products/system-vulnerability-remediation-evidence',
  'https://security-docs.com/products/third-party-agreements-evidence',
  'https://security-docs.com/products/training-completion-evidence',
];

// Function to submit URLs to IndexNow
function submitToIndexNow(urlList, batchSize = 100) {
  const batches = [];
  for (let i = 0; i < urlList.length; i += batchSize) {
    batches.push(urlList.slice(i, i + batchSize));
  }

  console.log(`🚀 SecurityDocs IndexNow Bulk Push\n`);
  console.log(`📊 Total URLs: ${urlList.length}`);
  console.log(`📦 Batches: ${batches.length} (${batchSize} URLs per batch)\n`);

  let completedBatches = 0;

  batches.forEach((batch, index) => {
    const payload = JSON.stringify({
      host: DOMAIN,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    // Add delay between batches to avoid rate limiting
    setTimeout(() => {
      const req = https.request(options, (res) => {
        completedBatches++;
        
        if (res.statusCode === 200) {
          console.log(`✅ Batch ${index + 1}/${batches.length} - Status: ${res.statusCode}`);
          console.log(`   Submitted ${batch.length} URLs successfully`);
        } else if (res.statusCode === 202) {
          console.log(`✅ Batch ${index + 1}/${batches.length} - Status: ${res.statusCode} (Accepted)`);
          console.log(`   Submitted ${batch.length} URLs successfully`);
        } else {
          console.log(`⚠️  Batch ${index + 1}/${batches.length} - Status: ${res.statusCode}`);
        }

        let responseData = '';
        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          if (responseData.length > 0) {
            console.log(`   Response: ${responseData}`);
          }

          if (completedBatches === batches.length) {
            console.log(`\n🎉 IndexNow submission complete!`);
            console.log(`📝 Submitted ${urlList.length} URLs across ${batches.length} batches`);
            console.log(`\n⏰ URLs will be processed by Bing/Yandex within 24-48 hours`);
            console.log(`\n📋 Next step: Manually submit top 20 URLs to Google Search Console`);
          }
        });
      });

      req.on('error', (error) => {
        console.error(`❌ Batch ${index + 1} failed:`, error.message);
        completedBatches++;
      });

      req.write(payload);
      req.end();
    }, index * 2000); // 2 second delay between batches
  });
}

// Run it
submitToIndexNow(urls);