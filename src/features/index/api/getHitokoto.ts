import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { HotokotoProps } from '../types'

export const getHitokoto = (): AxiosPromise<HotokotoProps> => {
  return axios.get('https://v1.hitokoto.cn', { baseURL: '' })
}
