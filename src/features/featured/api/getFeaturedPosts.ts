import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { IFeaturedPost } from '../types'

export const getFeaturedPosts = (): AxiosPromise<IFeaturedPost[]> => {
  return axios.get('/featured/posts/posts.json')
}
