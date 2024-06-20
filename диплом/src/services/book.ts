import { client } from '../api/client'
import { newBooksEndpoint, bookEndpoint } from '../api/endpoint'

async function requestBooks (params = {}) {
  const { data } = await client.get(newBooksEndpoint, { params })
  return data
}

async function requestBook (isbn13: string) {
  const { data } = await client.get(`${bookEndpoint}${isbn13}`)
  return data
}

export { requestBooks, requestBook }
