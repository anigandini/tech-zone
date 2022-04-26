export async function handlerPoints(amount: 1000|5000|7500) {
    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('Content-Type', 'application/json')
    requestHeaders.set('Accept', 'application/json')
    requestHeaders.set('Authorization', 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY)
    const res = await fetch('https://coding-challenge-api.aerolab.co/user/points', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify({'amount': amount})
    })
    const data = await res.json()
    return data
}