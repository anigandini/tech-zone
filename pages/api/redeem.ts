export async function handler(productId: string) {
    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('Content-Type', 'application/json')
    requestHeaders.set('Accept', 'application/json')
    requestHeaders.set('Authorization', 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY)
    const res = await fetch('https://coding-challenge-api.aerolab.co/redeem', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify({'productId': productId})
    })
    const data = await res.json()
    return data
}