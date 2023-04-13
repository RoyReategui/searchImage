import { type GifData } from '../interfaces'

const url = 'https://api.giphy.com/v1/gifs'
const apiKey = 'KhF13YR6MPNNW7NRIwp4MqS61lQbgitd'

export const getApiGif = async (search: string): Promise<GifData[] | null > => {
  const paramas = `${url}/search?q=${search}&api_key=${apiKey}&limit=10`
  try {
    const resp = await fetch(paramas)
    if (resp.ok) {
      const { data } = await resp.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
  return null
}
