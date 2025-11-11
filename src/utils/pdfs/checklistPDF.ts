import { generatePDF } from '../pdfGenerator';

export async function generateChecklistPDF(): Promise<Buffer> {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOC 2 Compliance Checklist - SecurityDocs</title>
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
        
        /* Print styles */
        @media print {
            body { margin: 0; }
            .page-break { page-break-before: always; }
            .no-print { display: none; }
        }
        
        /* Announcement Bar */
        .announcement-bar {
            background: #059669;
            color: white;
            padding: 0.5rem 2rem;
            text-align: center;
            font-size: 0.875rem;
        }
        
        .announcement-bar strong {
            font-weight: 600;
        }
        
        /* Header */
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
        
        .badge-icon {
            width: 16px;
            height: 16px;
            margin-right: 0.5rem;
        }
        
        /* Content */
        .content {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        /* Progress Overview */
        .progress-section {
            background: #f8fafc;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .progress-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
        }
        
        .progress-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
        
        .progress-item {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
        }
        
        .progress-value {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        
        .progress-value.blue { color: #2563eb; }
        .progress-value.green { color: #059669; }
        .progress-value.gray { color: #64748b; }
        
        .progress-label {
            font-size: 0.875rem;
            color: #64748b;
        }
        
        /* Tips Section */
        .tips-section {
            background: #ecfdf5;
            border: 1px solid #d1fae5;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .tips-header {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1rem;
        }
        
        .tips-icon {
            width: 24px;
            height: 24px;
            color: #059669;
            margin-right: 0.75rem;
            margin-top: 0.125rem;
            flex-shrink: 0;
        }
        
        .tips-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .tips-list {
            list-style: none;
        }
        
        .tips-list li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.5rem;
        }
        
        .tip-bullet {
            width: 8px;
            height: 8px;
            background: #059669;
            border-radius: 50%;
            margin-right: 0.75rem;
            margin-top: 0.5rem;
            flex-shrink: 0;
        }
        
        /* Checklist Sections */
        .checklist-section {
            margin-bottom: 2rem;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .section-header {
            background: #f8fafc;
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .section-title {
            display: flex;
            align-items: center;
            font-size: 1.125rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .section-icon {
            width: 24px;
            height: 24px;
            color: #2563eb;
            margin-right: 0.75rem;
        }
        
        .section-progress {
            font-size: 0.875rem;
            color: #64748b;
        }
        
        .section-content {
            padding: 1.5rem;
        }
        
        .section-description {
            background: #eff6ff;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            color: #374151;
        }
        
        .section-description.green { background: #ecfdf5; color: #047857; }
        .section-description.amber { background: #fffbeb; color: #92400e; }
        .section-description.red { background: #fef2f2; color: #dc2626; }
        
        /* Checklist Items */
        .checklist-items {
            list-style: none;
        }
        
        .checklist-item {
            display: flex;
            align-items: flex-start;
            padding: 0.75rem 0;
            border-bottom: 1px solid #f1f5f9;
        }
        
        .checklist-item:last-child {
            border-bottom: none;
        }
        
        .item-checkbox {
            width: 20px;
            height: 20px;
            border: 2px solid #d1d5db;
            border-radius: 4px;
            margin-right: 0.75rem;
            margin-top: 0.125rem;
            flex-shrink: 0;
        }
        
        .item-content {
            flex: 1;
        }
        
        .item-title {
            font-weight: 500;
            color: #1e293b;
        }
        
        .item-badges {
            display: inline-flex;
            gap: 0.5rem;
            margin-left: 0.5rem;
        }
        
        .item-badge {
            font-size: 0.75rem;
            padding: 0.125rem 0.5rem;
            border-radius: 9999px;
            font-weight: 500;
        }
        
        .badge-required {
            background: #fef2f2;
            color: #dc2626;
        }
        
        .badge-easy { color: #059669; }
        .badge-medium { color: #d97706; }
        .badge-hard { color: #dc2626; }
        
        /* Resource Boxes */
        .resource-box {
            background: #eff6ff;
            border-radius: 8px;
            padding: 0.75rem;
            margin-top: 1rem;
            font-size: 0.875rem;
        }
        
        .resource-box.green { background: #ecfdf5; color: #047857; }
        .resource-box.amber { background: #fffbeb; color: #92400e; }
        .resource-box.red { background: #fef2f2; color: #dc2626; }
        
        .resource-box strong {
            font-weight: 600;
        }
        
        /* Footer */
        .footer {
            background: #f8fafc;
            padding: 2rem;
            text-align: center;
            border-top: 1px solid #e2e8f0;
            margin-top: 2rem;
        }
        
        .footer-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
        }
        
        .footer-text {
            color: #64748b;
            margin-bottom: 1.5rem;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .footer-item {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
        }
        
        .footer-item-icon {
            width: 32px;
            height: 32px;
            margin: 0 auto 0.75rem;
        }
        
        .footer-item-icon.blue { color: #2563eb; }
        .footer-item-icon.green { color: #059669; }
        .footer-item-icon.amber { color: #d97706; }
        
        .footer-item-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .footer-item-desc {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 1rem;
        }
        
        .footer-link {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
        }
        
        .disclaimer {
            font-size: 0.875rem;
            color: #64748b;
            font-style: italic;
            margin-top: 1.5rem;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Announcement Bar -->
    <div class="announcement-bar">
        <strong>SOC 2 Document Templates</strong> - Get compliant faster with proven templates and guidance
    </div>

    <!-- Header -->
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
                <svg class="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Interactive Compliance Guide
            </div>
            
            <h1 class="title">SOC 2 Compliance Checklist</h1>
            <p class="subtitle">Your step-by-step guide to SOC 2 compliance. Track your progress, understand requirements, and ensure you don't miss critical steps on your compliance journey.</p>
        </div>
    </div>

    <!-- Content -->
    <div class="content">
        <!-- Progress Overview -->
        <div class="progress-section">
            <h2 class="progress-title">Your Progress Overview</h2>
            <div class="progress-grid">
                <div class="progress-item">
                    <div class="progress-value blue">0%</div>
                    <div class="progress-label">Overall Progress</div>
                </div>
                <div class="progress-item">
                    <div class="progress-value green">0</div>
                    <div class="progress-label">Items Completed</div>
                </div>
                <div class="progress-item">
                    <div class="progress-value gray">45</div>
                    <div class="progress-label">Items Remaining</div>
                </div>
            </div>
        </div>

        <!-- Pro Tips -->
        <div class="tips-section">
            <div class="tips-header">
                <svg class="tips-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                    <h3 class="tips-title">Pro Tips for Success</h3>
                    <ul class="tips-list">
                        <li>
                            <div class="tip-bullet"></div>
                            <span><strong>Start early:</strong> SOC 2 preparation typically takes 6-12 months</span>
                        </li>
                        <li>
                            <div class="tip-bullet"></div>
                            <span><strong>Focus on your scope:</strong> Don't try to include everything at once</span>
                        </li>
                        <li>
                            <div class="tip-bullet"></div>
                            <span><strong>Document everything:</strong> Evidence collection starts from day one</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Getting Started Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Getting Started (Before Implementation)
                </div>
                <div class="section-progress">0/5 completed</div>
            </div>
            <div class="section-content">
                <div class="section-description">
                    These foundational steps set you up for success. Complete these before diving into technical implementation.
                </div>
                
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Define your scope</span> - Identify systems that store, process, or transmit customer data
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Choose your criteria</span> - Start with Security + Availability for most SaaS companies
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Assign ownership</span> - Designate a compliance lead and cross-functional team
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Set timeline</span> - Plan 6-12 months for implementation + evidence collection
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Budget planning</span> - Allocate resources for tools, auditor, and internal time
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                </ul>
                
                <div class="resource-box">
                    <strong>💡 Need help with planning?</strong> Check out our Implementation Guides at security-docs.com/resources/implementation-guides
                </div>
            </div>
        </div>

        <!-- Documentation & Policies Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clip-rule="evenodd"></path>
                    </svg>
                    Documentation & Policies ✨ Templates Available
                </div>
                <div class="section-progress">0/5 completed</div>
            </div>
            <div class="section-content">
                <div class="section-description green">
                    <strong>✨ Templates Available:</strong> Save months of work with our professionally written, SOC 2-aligned policy templates.
                </div>
                
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Information Security Policy</span> - Master policy covering all security practices
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-hard">●●● Advanced</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Access Control Policy</span> - User access management and authentication requirements
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Incident Response Plan</span> - Procedures for detecting and responding to security incidents
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Data Management Policy</span> - How customer data is handled throughout its lifecycle
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Risk Management Policy</span> - Process for identifying and mitigating risks
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                </ul>
                
                <div class="resource-box green">
                    <strong>🎯 Save time:</strong> Our Policy Templates are professionally written and SOC 2 aligned. Visit security-docs.com/products/policies
                </div>
            </div>
        </div>

        <div class="page-break"></div>

        <!-- Technical Security Controls Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    Technical Security Controls
                </div>
                <div class="section-progress">0/7 completed</div>
            </div>
            <div class="section-content">
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Multi-factor authentication</span> - Implement MFA for all administrative access
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Network security</span> - Firewalls, network segmentation, VPN access
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Data encryption</span> - Encrypt data at rest and in transit
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Backup and recovery</span> - Regular backups with tested restore procedures
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">System monitoring</span> - Security information and event management (SIEM)
                            <div class="item-badges">
                                <span class="item-badge badge-hard">●●● Advanced</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Vulnerability management</span> - Regular scans and patch management
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Antivirus/anti-malware</span> - Endpoint protection across all systems
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                </ul>
                
                <div class="resource-box">
                    <strong>📋 Need detailed guidance?</strong> Check our Evidence Explanations for implementation details at security-docs.com/products/evidence
                </div>
            </div>
        </div>

        <!-- Administrative Controls Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                    Administrative Controls
                </div>
                <div class="section-progress">0/5 completed</div>
            </div>
            <div class="section-content">
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Employee background checks</span> - Verify identity and background for new hires
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Security awareness training</span> - Regular training for all employees
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Access reviews</span> - Quarterly reviews of who has access to what systems
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Vendor management</span> - Due diligence and contracts for third-party providers
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Physical security</span> - Secure facilities and device management
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Operational Procedures Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                    </svg>
                    Operational Procedures
                </div>
                <div class="section-progress">0/5 completed</div>
            </div>
            <div class="section-content">
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Change management</span> - Formal process for system and application changes
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Asset inventory</span> - Maintain list of all hardware and software assets
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Log monitoring</span> - Collect and review security logs regularly
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Performance monitoring</span> - Track system availability and performance
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Disaster recovery testing</span> - Regular tests of backup and recovery procedures
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                </ul>
                
                <div class="resource-box amber">
                    <strong>⚡ Ready-to-use forms:</strong> Our Document Templates provide procedures and forms at security-docs.com/products/documents
                </div>
            </div>
        </div>

        <div class="page-break"></div>

        <!-- Evidence Collection Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Evidence Collection (3-12 months before audit)
                </div>
                <div class="section-progress">0/7 completed</div>
            </div>
            <div class="section-content">
                <div class="section-description amber">
                    Start collecting evidence as soon as your controls are operational. Auditors need to see that controls operated effectively over time.
                </div>
                
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Access control evidence</span> - Logs of user provisioning/deprovisioning
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Security monitoring logs</span> - Evidence of ongoing monitoring activities
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Training records</span> - Documentation of employee security training
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Incident documentation</span> - Records of any security incidents and responses
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Vulnerability scan reports</span> - Regular security assessments and remediation
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Change management logs</span> - Documentation of all system changes
                            <div class="item-badges">
                                <span class="item-badge badge-required">Required</span>
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Backup verification</span> - Proof that backups are working and tested
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                </ul>
                
                <div class="resource-box green">
                    <strong>🎯 Confused about evidence?</strong> Our Evidence Bundle explains exactly what auditors expect at security-docs.com/products/evidence-bundle
                </div>
            </div>
        </div>

        <!-- Pre-Audit Preparation Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    Pre-Audit Preparation
                </div>
                <div class="section-progress">0/5 completed</div>
            </div>
            <div class="section-content">
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Internal readiness assessment</span> - Self-evaluation against SOC 2 requirements
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Auditor selection</span> - Research and interview potential audit firms
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Evidence organization</span> - Compile all documentation and evidence
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Team preparation</span> - Brief all team members who will interact with auditors
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Gap remediation</span> - Address any identified control gaps
                            <div class="item-badges">
                                <span class="item-badge badge-hard">●●● Advanced</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Common Pitfalls Section -->
        <div class="checklist-section">
            <div class="section-header">
                <div class="section-title">
                    <svg class="section-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                    Common Pitfalls to Avoid
                </div>
                <div class="section-progress">0/5 completed</div>
            </div>
            <div class="section-content">
                <div class="section-description red">
                    <strong>⚠️ Avoid these mistakes:</strong> These are the most common reasons companies fail their first audit.
                </div>
                
                <ul class="checklist-items">
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Scope too broad</span> - Start narrow with core customer-facing systems only
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Documentation overload</span> - Focus on what you actually do, not aspirational goals
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Last-minute preparation</span> - Controls need to operate for months before audit
                            <div class="item-badges">
                                <span class="item-badge badge-medium">●● Medium</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Ignoring availability</span> - Most SaaS companies need this criterion
                            <div class="item-badges">
                                <span class="item-badge badge-easy">● Easy</span>
                            </div>
                        </div>
                    </li>
                    <li class="checklist-item">
                        <div class="item-checkbox"></div>
                        <div class="item-content">
                            <span class="item-title">Weak access controls</span> - This is the #1 area where companies fail audits
                            <div class="item-badges">
                                <span class="item-badge badge-hard">●●● Advanced</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <h2 class="footer-title">Ready to Get Started?</h2>
        <p class="footer-text">
            Don't start from scratch. Our templates and guidance help you implement these controls correctly the first time.
        </p>

        <div class="footer-grid">
            <div class="footer-item">
                <svg class="footer-item-icon blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clip-rule="evenodd"></path>
                </svg>
                <h4 class="footer-item-title">Policy Templates</h4>
                <p class="footer-item-desc">Professional policies that address SOC 2 requirements</p>
                <a href="#" class="footer-link">security-docs.com/products/policies</a>
            </div>

            <div class="footer-item">
                <svg class="footer-item-icon green" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                <h4 class="footer-item-title">Evidence Guidance</h4>
                <p class="footer-item-desc">Learn what auditors look for with detailed explanations</p>
                <a href="#" class="footer-link">security-docs.com/products/evidence</a>
            </div>

            <div class="footer-item">
                <svg class="footer-item-icon amber" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <h4 class="footer-item-title">Complete Bundle</h4>
                <p class="footer-item-desc">Everything you need for SOC 2 compliance</p>
                <a href="#" class="footer-link">security-docs.com/products/complete-bundle</a>
            </div>
        </div>

        <div class="disclaimer">
            This checklist provides general guidance. Every organization's SOC 2 journey is unique based on their specific systems, risks, and business model.
        </div>
    </div>
</body>
</html>`;

  return generatePDF(htmlContent);
}