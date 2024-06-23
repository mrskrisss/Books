import { client } from '../api/client'
import { newBooksEndpoint, bookEndpoint, searchEndpoint } from '../api/endpoint'

async function requestBooks () {
  const { data } = await client.get(`${newBooksEndpoint}`)
  return data
}

async function requestBook (isbn13: string) {
  const { data } = await client.get(`${bookEndpoint}${isbn13}`)
  return data
}

async function requestSearchBooks (params = {}) {
  const { data } = await client.get(searchEndpoint, { params })
  return data
}

export { requestBooks, requestBook, requestSearchBooks }
