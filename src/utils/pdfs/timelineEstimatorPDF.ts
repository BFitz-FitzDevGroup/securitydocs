import { generatePDF } from '../pdfGenerator';

interface TimelinePhase {
  name: string;
  duration: number;
  description: string;
  tasks: string[];
  dependencies: string[];
  criticalPath: boolean;
}

interface TimelineEstimatorData {
  companySize: string;
  currentState: string;
  criteria: string[];
  urgency: string;
  teamCapacity: string;
  budget: string;
  hasConsultant: string;
  complexity: string[];
  results: {
    totalWeeks: number;
    phases: TimelinePhase[];
    criticalPath: string[];
    risks: string[];
    recommendations: string[];
    milestones: { week: number; title: string; description: string }[];
  };
}

export async function generateTimelineEstimatorPDF(data: TimelineEstimatorData): Promise<Buffer> {
  const formatDuration = (weeks: number): string => {
    const months = Math.round(weeks / 4.33);
    if (months < 1) return `${weeks} weeks`;
    if (months === 1) return '1 month';
    return `${months} months`;
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

  const getCurrentStateLabel = (state: string): string => {
    const labels: Record<string, string> = {
      'startup': 'Startup/Minimal',
      'basic': 'Basic Controls',
      'intermediate': 'Intermediate',
      'advanced': 'Advanced'
    };
    return labels[state] || state;
  };

  const getUrgencyLabel = (urgency: string): string => {
    const labels: Record<string, string> = {
      'aggressive': 'Aggressive (ASAP)',
      'standard': 'Standard',
      'conservative': 'Conservative'
    };
    return labels[urgency] || urgency;
  };

  const getCapacityLabel = (capacity: string): string => {
    const labels: Record<string, string> = {
      'limited': 'Limited (<25% capacity)',
      'moderate': 'Moderate (25-50% capacity)',
      'dedicated': 'Dedicated (>50% capacity)'
    };
    return labels[capacity] || capacity;
  };

  const getBudgetLabel = (budget: string): string => {
    const labels: Record<string, string> = {
      'minimal': 'Minimal Budget',
      'moderate': 'Moderate Budget',
      'generous': 'Generous Budget'
    };
    return labels[budget] || budget;
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

  const getComplexityLabels = (complexity: string[]): string[] => {
    const labels: Record<string, string> = {
      'multiRegion': 'Multi-region deployment',
      'legacy': 'Legacy systems integration',
      'customDev': 'Custom development required',
      'thirdParty': 'Many third-party integrations',
      'regulatory': 'Additional regulatory requirements',
      'distributed': 'Distributed team/remote work'
    };
    return complexity.map(c => labels[c] || c);
  };

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOC 2 Implementation Timeline - SecurityDocs</title>
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
            background: linear-gradient(135deg, #ecfdf5 0%, #eff6ff 100%);
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
            background: #059669;
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
            background: #d1fae5;
            color: #047857;
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
            background: linear-gradient(135deg, #ecfdf5 0%, #eff6ff 100%);
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .total-timeline {
            font-size: 2.5rem;
            font-weight: 700;
            color: #059669;
            margin-bottom: 0.5rem;
        }
        
        .timeline-subtitle {
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
        
        .phases-list {
            space-y: 1rem;
        }
        
        .phase-item {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        
        .phase-item.critical {
            border-color: #059669;
            background: #ecfdf5;
        }
        
        .phase-header {
            display: flex;
            justify-content: between;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        
        .phase-name {
            font-weight: 600;
            color: #1e293b;
            flex: 1;
        }
        
        .phase-duration {
            font-size: 0.875rem;
            color: #64748b;
            margin-right: 1rem;
        }
        
        .critical-badge {
            font-size: 0.75rem;
            background: #d1fae5;
            color: #047857;
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
        }
        
        .phase-description {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 0.75rem;
        }
        
        .phase-tasks {
            font-size: 0.75rem;
            color: #64748b;
        }
        
        .milestones-list {
            space-y: 0.75rem;
        }
        
        .milestone-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.75rem;
        }
        
        .milestone-week {
            width: 2rem;
            height: 2rem;
            background: #ecfdf5;
            color: #047857;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: 600;
            margin-right: 0.75rem;
            flex-shrink: 0;
        }
        
        .milestone-content {
            flex: 1;
        }
        
        .milestone-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.25rem;
        }
        
        .milestone-description {
            font-size: 0.875rem;
            color: #64748b;
        }
        
        .risks-section {
            background: #fffbeb;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .recommendations-section {
            background: #eff6ff;
            border: 1px solid #3b82f6;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .alert-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
        }
        
        .alert-icon {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
        }
        
        .alert-list {
            list-style: none;
        }
        
        .alert-list li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
        }
        
        .bullet {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin-right: 0.75rem;
            margin-top: 0.5rem;
            flex-shrink: 0;
        }
        
        .bullet.amber { background: #f59e0b; }
        .bullet.blue { background: #3b82f6; }
        
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
        <strong>Your Personalized SOC 2 Timeline</strong> - Generated by SecurityDocs Timeline Estimator
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
                Personalized Implementation Plan
            </div>
            
            <h1 class="title">Your SOC 2 Implementation Timeline</h1>
            <p class="subtitle">Customized project plan based on your current state and resources</p>
        </div>
    </div>

    <div class="content">
        <!-- Timeline Summary -->
        <div class="summary-section">
            <div class="total-timeline">
                ${formatDuration(data.results.totalWeeks)}
            </div>
            <div class="timeline-subtitle">
                Estimated Implementation Timeline
            </div>
            
            <div class="specs-grid">
                <div class="spec-item">
                    <div class="spec-label">Total Duration</div>
                    <div class="spec-value">${data.results.totalWeeks} weeks</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Criteria Count</div>
                    <div class="spec-value">${data.criteria.length || 1} criteria</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Team Capacity</div>
                    <div class="spec-value">${getCapacityLabel(data.teamCapacity).split(' ')[0]}</div>
                </div>
            </div>
        </div>

        <!-- Your Project Profile -->
        <div class="section">
            <h2 class="section-title">Your Project Profile</h2>
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-card-title">Company Size</div>
                    <div class="info-card-content">${getCompanySizeLabel(data.companySize)}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Current Security State</div>
                    <div class="info-card-content">${getCurrentStateLabel(data.currentState)}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Project Urgency</div>
                    <div class="info-card-content">${getUrgencyLabel(data.urgency)}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Budget Approach</div>
                    <div class="info-card-content">${getBudgetLabel(data.budget)}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Selected Criteria</div>
                    <div class="info-card-content">${getCriteriaLabels(data.criteria).join(', ')}</div>
                </div>
                <div class="info-card">
                    <div class="info-card-title">Using Consultant</div>
                    <div class="info-card-content">${data.hasConsultant === 'yes' ? 'Yes' : 'No'}</div>
                </div>
            </div>
            
            ${data.complexity.length > 0 ? `
            <div style="margin-top: 1rem;">
                <div class="info-card">
                    <div class="info-card-title">Complexity Factors</div>
                    <div class="info-card-content">${getComplexityLabels(data.complexity).join(', ')}</div>
                </div>
            </div>
            ` : ''}
        </div>

        <!-- Implementation Phases -->
        <div class="section">
            <h2 class="section-title">Implementation Phases</h2>
            <div class="phases-list">
                ${data.results.phases.map(phase => `
                    <div class="phase-item ${phase.criticalPath ? 'critical' : ''}">
                        <div class="phase-header">
                            <div class="phase-name">${phase.name}</div>
                            <div class="phase-duration">${formatDuration(phase.duration)}</div>
                            ${phase.criticalPath ? '<div class="critical-badge">Critical Path</div>' : ''}
                        </div>
                        <div class="phase-description">${phase.description}</div>
                        <div class="phase-tasks">
                            <strong>Key Tasks:</strong> ${phase.tasks.slice(0, 3).join(', ')}${phase.tasks.length > 3 ? ` and ${phase.tasks.length - 3} more...` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Milestones and Risks/Recommendations -->
        <div class="section">
            <div class="grid-2">
                <div>
                    <h3 class="subsection-title">Key Milestones</h3>
                    <div class="milestones-list">
                        ${data.results.milestones.map(milestone => `
                            <div class="milestone-item">
                                <div class="milestone-week">${milestone.week}</div>
                                <div class="milestone-content">
                                    <div class="milestone-title">${milestone.title}</div>
                                    <div class="milestone-description">${milestone.description}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    ${data.results.risks.length > 0 ? `
                    <h3 class="subsection-title">Potential Risks</h3>
                    <div class="risks-section">
                        <div class="alert-title">
                            <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                            Risk Factors
                        </div>
                        <ul class="alert-list">
                            ${data.results.risks.map(risk => `
                                <li><div class="bullet amber"></div>${risk}</li>
                            `).join('')}
                        </ul>
                    </div>
                    ` : ''}

                    <h3 class="subsection-title">Recommendations</h3>
                    <div class="recommendations-section">
                        <div class="alert-title">
                            <svg class="alert-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                            Success Tips
                        </div>
                        <ul class="alert-list">
                            ${data.results.recommendations.map(rec => `
                                <li><div class="bullet blue"></div>${rec}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
            <h2 class="cta-title">Ready to Start Your Implementation?</h2>
            <p class="cta-text">
                Get the templates and guidance you need to execute this timeline successfully.
            </p>
            <p style="margin-bottom: 1rem; font-weight: 500;">
                🎯 <strong>Implementation Templates:</strong> security-docs.com/products/complete-bundle
            </p>
            <p style="font-weight: 500;">
                📋 <strong>Implementation Guides:</strong> security-docs.com/resources/implementation-guides
            </p>
        </div>

        <!-- Disclaimer -->
        <div class="disclaimer">
            <div class="disclaimer-title">Timeline Assumptions</div>
            <ul>
                <li>Timelines assume dedicated team availability during business hours</li>
                <li>Delays may occur due to vendor selection, budget approval, or scope changes</li>
                <li>First-time implementations typically take 20-30% longer than estimated</li>
                <li>Evidence collection period requires 8-12 weeks minimum for most criteria</li>
                <li>External dependencies (auditor availability) can affect final timeline</li>
            </ul>
        </div>
    </div>
</body>
</html>`;

  return generatePDF(htmlContent);
}