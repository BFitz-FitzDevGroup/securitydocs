import puppeteer from 'puppeteer';

interface PDFOptions {
  format?: 'A4' | 'Letter';
  margin?: {
    top: string;
    bottom: string;
    left: string;
    right: string;
  };
}

export async function generatePDF(htmlContent: string, options: PDFOptions = {}): Promise<Buffer> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setContent(htmlContent, { 
    waitUntil: 'networkidle0' 
  });
  
  const pdf = await page.pdf({
    format: options.format || 'A4',
    printBackground: true,
    margin: options.margin || { 
      top: '20px', 
      bottom: '20px', 
      left: '20px', 
      right: '20px' 
    }
  });
  
  await browser.close();
  return Buffer.from(pdf);
}