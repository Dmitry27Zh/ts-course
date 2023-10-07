export async function request(url: string) {
  const response = await fetch(url)

  return response.json()
}

export async function request2<T>(url: string): Promise<T> {
  const response = await fetch(url)

  return response.json()
}

interface AnyObject {
  [key: string]: unknown
}

export async function request3<T = AnyObject>(url: string): Promise<T> {
  const response = await fetch(url)

  return response.json()
}

const data = request('someurl') // ---- : Promise<any>
const data2 = request2('someurl') // ---- : Promise<unknown>
const data3 = request3('someurl') // ---- : Promise<AnyObject>
