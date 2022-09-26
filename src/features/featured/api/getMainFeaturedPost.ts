import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { FeaturedPostProps } from '../types'

export const getMainFeaturedPost = (): AxiosPromise<FeaturedPostProps> => {
  return axios.get('/featured/main/main.json')
}
