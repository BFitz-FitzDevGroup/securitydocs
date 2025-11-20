export async function submitToIndexNow(urls: string | string[]) {
  const KEY = process.env.INDEXNOW_API_KEY;
  
  if (!KEY) {
    console.error('❌ INDEXNOW_API_KEY not found in environment variables');
    return false;
  }
  
  const HOST = 'security-docs.com';
  
  // Convert single URL to array
  const urlList = Array.isArray(urls) ? urls : [urls];
  
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urlList,
  };
  
  console.log('📤 Sending payload:');
  console.log(JSON.stringify(payload, null, 2));
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const responseText = await response.text();
    
    if (response.ok) {
      console.log('✅ Submitted to IndexNow:', urlList);
      return true;
    } else {
      console.error('❌ IndexNow error:', response.status, response.statusText);
      console.error('📥 Response body:', responseText);
      return false;
    }
  } catch (error) {
    console.error('❌ IndexNow submission failed:', error);
    return false;
  }
}