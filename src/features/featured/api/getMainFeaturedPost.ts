import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { IFeaturedPost } from '../types'

export const getMainFeaturedPost = (): AxiosPromise<IFeaturedPost> => {
  return axios.get('/featured/main/main.json')
}
