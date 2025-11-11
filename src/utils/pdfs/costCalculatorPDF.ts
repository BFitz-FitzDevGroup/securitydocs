import { generatePDF } from '../pdfGenerator';

interface CostCalculatorData {
  companySize: string;
  industry: string;
  criteria: string[];
  currentSecurity: string;
  timeline: string;
  approach: string;
  results: {
    auditCost: { min: number; max: number };
    toolCost: { min: number; max: number };
    internalCost: { hours: number; description: string };
    additionalCosts: {
      penetrationTest: { min: number; max: number };
      legal: { min: number; max: number };
      training: { min: number; max: number };
    };
    total: { min: number; max: number };
    timeline: string;
    criteriaCount: number;
    recommendations: string[];
  };
}

export async function generateCostCalculatorPDF(data: CostCalculatorData): Promise<Buffer> {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCompanySizeLabel = (size: string): string => {
    const labels: Record<string, string> = {
      '1-10': '1-10 employees',
      '11-50': '11-50 employees',
      '51-200': '51-200 employees',
      '201-500': '201-500 employees',
      '500+': '500+ employees'
    };
    return labels[size] || size;
  };

  const getIndustryLabel = (industry: string): string => {
    const labels: Record<string, string> = {
      'saas': 'SaaS/Technology',
      'healthcare': 'Healthcare Technology',
      'financial': 'Financial Services',
      'ecommerce': 'E-commerce',
      'other': 'Other Industry'
    };
    return labels[industry] || industry;
  };

  const getSecurityLabel = (security: string): string => {
    const labels: Record<string, string> = {
      'minimal': 'Minimal Security',
      'basic': 'Basic Security',
      'advanced': 'Advanced Security'
    };
    return labels[security] || security;
  };

  const getApproachLabel = (approach: string): string => {
    const labels: Record<string, string> = {
      'diy': 'DIY (Do It Yourself)',
      'hybrid': 'Hybrid (Templates + Some Consulting)',
      'consultant': 'Full-Service Consultant'
    };
    return labels[approach] || approach;
  };

  const getCriteriaLabels = (criteria: string[]): string[] => {
    const labels: Record<string, string> = {
      'security': 'Security',
      'availability': 'Availability',
      'processing': 'Processing Integrity',
      'confidentiality': 'Confidentiality',
      'privacy': 'Privacy'
    };
    return criteria.map(c => labels[c] || c);
  };

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOC 2 Cost Estimate - SecurityDocs</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #334155;
            background: #ffffff;
        }
        
        @media print {
            body { margin: 0; }
            .page-break { page-break-before: always; }
            .no-print { display: none; }
        }
        
        .announcement-bar {
            background: #059669;
            color: white;
            padding: 0.5rem 2rem;
            text-align: center;
            font-size: 0.875rem;
        }
        
        .header {
            background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%);
            padding: 2rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .header-content {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .logo-section {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .logo {
            width: 40px;
            height: 40px;
            background: #2563eb;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
        }
        
        .logo svg {
            width: 24px;
            height: 24px;
            color: white;
            stroke-width: 2;
        }
        
        .company-name {
            font-size: 20px;
            font-weight: 700;
            color: #1e293b;
        }
        
        .company-tagline {
            font-size: 12px;
            color: #64748b;
            margin-top: -2px;
        }
        
        .title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .subtitle {
            font-size: 1.125rem;
            color: #64748b;
            margin-bottom: 1.5rem;
        }
        
        .badge {
            display: inline-flex;
            align-items: center;
            background: #dbeafe;
            color: #1d4ed8;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .content {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .summary-section {
            background: linear-gradient(135deg, #eff6ff 0%, #ecfdf5 100%);
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .total-cost {
            font-size: 2.5rem;
            font-weight: 700;
            color: #2563eb;
            margin-bottom: 0.5rem;
        }
        
        .cost-subtitle {
            color: #64748b;
            margin-bottom: 1rem;
        }
        
        .specs-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .spec-item {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
        }
        
        .spec-label {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 0.25rem;
        }
        
        .spec-value {
            font-weight: 600;
            color: #1e293b;
        }
        
        .section {
            margin-bottom: 2rem;
        }
        
        .section-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
        }
        
        .subsection-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
        }
        
        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .cost-breakdown {
            background: #f8fafc;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .cost-item {
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .cost-item:last-child {
            border-bottom: none;
        }
        
        .cost-item.total {
            background: #eff6ff;
            font-weight: 600;
        }
        
        .cost-label {
            flex: 1;
        }
        
        .cost-amount {
            font-weight: 500;
            color: #2563eb;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        
        .info-card {
            background: #f8fafc;
            border-radius: 8px;
            padding: 1rem;
        }
        
        .info-card-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .info-card-content {
            font-size: 0.875rem;
            color: #64748b;
        }
        
        .recommendations {
            background: #ecfdf5;
            border: 1px solid #d1fae5;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .recommendations-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
        }
        
        .recommendations-list {
            list-style: none;
        }
        
        .recommendations-list li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.75rem;
            font-size: 0.875rem;
        }
        
        .bullet {
            width: 6px;
            height: 6px;
            background: #059669;
            border-radius: 50%;
            margin-right: 0.75rem;
            margin-top: 0.5rem;
            flex-shrink: 0;
        }
        
        .time-investment {
            background: #fffbeb;
            border: 1px solid #fbbf24;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .time-hours {
            font-size: 2rem;
            font-weight: 700;
            color: #d97706;
            margin-bottom: 0.5rem;
        }
        
        .cta-section {
            background: #f8fafc;
            border-radius: 12px;
            padding: 2rem;
            text-align: center;
            margin-top: 2rem;
        }
        
        .cta-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
        }
        
        .cta-text {
            color: #64748b;
            margin-bottom: 1.5rem;
        }
        
        .disclaimer {
            background: #fffbeb;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 1.5rem;
            margin-top: 2rem;
            font-size: 0.875rem;
        }
        
        .disclaimer-title {
            font-weight: 600;
            color: #92400e;
            margin-bottom: 0.75rem;
        }
        
        .disclaimer ul {
            list-style: none;
        }
        
        .disclaimer li {
            margin-bottom: 0.5rem;
            display: flex;
            align-items: flex-start;
        }
        
        .disclaimer li::before {
            content: "•";
            color: #d97706;
            margin-right: 0.5rem;
        }
    </style>
</head>
<body>
    <div class="announcement-bar">
        <strong>Your Personalized SOC 2 Cost Estimate</strong> - Generated by SecurityDocs Cost Calculator
    </div>

    <div class="header">
        <div class="header-content">
            <div class="logo-section">
                <div class="logo">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div>
                    <div class="company-name">SecurityDocs</div>
                    <div class="company-tagline">SOC 2 Compliance Templates</div>
                </div>
            </div>
            
            <div class="badge">
                Personalized Cost Estimate
            </div>
            
            <h1 class="title">Your SOC 2 Cost Breakdown</h1>
            <p class="subtitle">Based on your specific requirements and company profile</p>
        </div>
    </div>

    <div class="content">
        <!-- Total Cost Summary -->
        <div class="summary-section">
            <div class="total-cost">
                ${formatCurrency(data.results.total.min)} - ${formatCurrency(data.results.total.max)}
            </div>
            <div class="cost-subtitle">
                Total Estimated Investment for SOC 2 Compliance
            </div>
            
            <div class="specs-grid">
                <div class="spec-item">
                    <div class="spec-label">Company Size</div>
                    <div class="spec-value">${getCompanySizeLabel(data.companySize)}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Industry</div>
                    <div class="spec-value">${getIndustryLabel(data.industry)}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Criteria Count</div>
                    <div class="spec-value">${data.results.criteriaCount} criteria</div>
                </div>
            </div>
        </div>

        <!-- Your Selections -->
        <div class="section">
            <h2 class="section-title">Your Project Profile</h2>
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-card-title">Current Security Posture</div>
                    <div class="info-card-content">${getSecurityLabel(data.currentSecurity)}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Implementation Approach</div>
                    <div class="info-card-content">${getApproachLabel(data.approach)}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Selected Criteria</div>
                    <div class="info-card-content">${getCriteriaLabels(data.criteria).join(', ')}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Preferred Timeline</div>
                    <div class="info-card-content">${data.results.timeline}</div>
                </div>
            </div>
        </div>

        <!-- Cost Breakdown -->
        <div class="section">
            <h2 class="section-title">Detailed Cost Breakdown</h2>
            <div class="grid-2">
                <div>
                    <h3 class="subsection-title">Investment Categories</h3>
                    <div class="cost-breakdown">
                        <div class="cost-item">
                            <div class="cost-label">
                                <strong>Audit Fees</strong><br>
                                <small>CPA firm audit and report</small>
                            </div>
                            <div class="cost-amount">
                                ${formatCurrency(data.results.auditCost.min)} - ${formatCurrency(data.results.auditCost.max)}
                            </div>
                        </div>
                        <div class="cost-item">
                            <div class="cost-label">
                                <strong>Tools & Software</strong><br>
                                <small>Compliance and security tools</small>
                            </div>
                            <div class="cost-amount">
                                ${formatCurrency(data.results.toolCost.min)} - ${formatCurrency(data.results.toolCost.max)}
                            </div>
                        </div>
                        ${data.results.additionalCosts.penetrationTest.min > 0 ? `
                        <div class="cost-item">
                            <div class="cost-label">
                                <strong>Penetration Testing</strong><br>
                                <small>Required for multi-criteria audits</small>
                            </div>
                            <div class="cost-amount">
                                ${formatCurrency(data.results.additionalCosts.penetrationTest.min)} - ${formatCurrency(data.results.additionalCosts.penetrationTest.max)}
                            </div>
                        </div>
                        ` : ''}
                        <div class="cost-item">
                            <div class="cost-label">
                                <strong>Legal & Other</strong><br>
                                <small>Legal review, training, misc.</small>
                            </div>
                            <div class="cost-amount">
                                ${formatCurrency(data.results.additionalCosts.legal.min + data.results.additionalCosts.training.min)} - ${formatCurrency(data.results.additionalCosts.legal.max + data.results.additionalCosts.training.max)}
                            </div>
                        </div>
                        <div class="cost-item total">
                            <div class="cost-label"><strong>Total Investment</strong></div>
                            <div class="cost-amount">
                                ${formatCurrency(data.results.total.min)} - ${formatCurrency(data.results.total.max)}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="subsection-title">Time Investment</h3>
                    <div class="time-investment">
                        <div class="time-hours">~${data.results.internalCost.hours} hours</div>
                        <div>Internal team time required</div>
                        <div style="font-size: 0.875rem; margin-top: 0.5rem; color: #92400e;">
                            ${data.results.internalCost.description}
                        </div>
                    </div>

                    ${data.results.recommendations.length > 0 ? `
                    <div style="margin-top: 1.5rem;">
                        <h3 class="subsection-title">Recommendations</h3>
                        <div class="recommendations">
                            <ul class="recommendations-list">
                                ${data.results.recommendations.map(rec => `
                                    <li><div class="bullet"></div>${rec}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
            <h2 class="cta-title">Ready to Get Started?</h2>
            <p class="cta-text">
                Get detailed implementation guidance and templates to reduce your costs and timeline.
            </p>
            <p style="margin-bottom: 1rem; font-weight: 500;">
                🎯 <strong>Complete Bundle:</strong> security-docs.com/products/complete-bundle
            </p>
            <p style="font-weight: 500;">
                📋 <strong>Implementation Guides:</strong> security-docs.com/resources/implementation-guides
            </p>
        </div>

        <!-- Disclaimer -->
        <div class="disclaimer">
            <div class="disclaimer-title">Important Notes</div>
            <ul>
                <li>Costs can vary significantly based on specific requirements and auditor selection</li>
                <li>Timeline estimates assume dedicated team availability and no major scope changes</li>
                <li>First-year costs are typically higher due to initial implementation</li>
                <li>Annual maintenance costs are generally 60-70% of first-year costs</li>
                <li>Consider starting with Security + Availability criteria to reduce initial costs</li>
            </ul>
        </div>
    </div>
</body>
</html>`;

  return generatePDF(htmlContent);
}