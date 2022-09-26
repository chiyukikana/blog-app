import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { FeaturedPostProps } from '../types'

export const getFeaturedPosts = (): AxiosPromise<FeaturedPostProps[]> => {
  return axios.get('/featured/posts/posts.json')
}
