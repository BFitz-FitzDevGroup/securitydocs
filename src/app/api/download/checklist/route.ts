
import { generateChecklistPDF } from '@/utils/pdfs/checklistPDF';  // Updated import

export async function GET() {
  try {
    const pdf = await generateChecklistPDF();
    
    const pdfBuffer = Buffer.from(pdf);
    
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="soc2-compliance-checklist.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF generation failed:', error);
    return Response.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}