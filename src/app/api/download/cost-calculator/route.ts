import { generateCostCalculatorPDF } from '@/utils/pdfs/costCalculatorPDF';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const pdf = await generateCostCalculatorPDF(data);
    
    const pdfBuffer = Buffer.from(pdf);
    
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="soc2-cost-estimate.pdf"',
      },
    });
  } catch (error) {
    console.error('Cost Calculator PDF generation failed:', error);
    return Response.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}