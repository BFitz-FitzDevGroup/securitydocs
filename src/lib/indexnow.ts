export async function submitToIndexNow(urls: string | string[]) {
  const KEY = process.env.INDEXNOW_API_KEY!
  const HOST = 'security-docs.com'
  
  // Convert single URL to array
  const urlList = Array.isArray(urls) ? urls : [urls]
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: urlList,
      }),
    })
    
    if (response.ok) {
      console.log('✅ Submitted to IndexNow:', urlList)
      return true
    } else {
      console.error('❌ IndexNow error:', response.status, response.statusText)
      return false
    }
  } catch (error) {
    console.error('❌ IndexNow submission failed:', error)
    return false
  }
}