import { generateTimelineEstimatorPDF } from '@/utils/pdfs/timelineEstimatorPDF';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const pdf = await generateTimelineEstimatorPDF(data);
    
    const pdfBuffer = Buffer.from(pdf);
    
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="timeline-estimator.pdf"',
      },
    });
  } catch (error) {
    console.error('Cost Calculator PDF generation failed:', error);
    return Response.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}