import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { IHotokoto } from '../types'

export const getHitokoto = (): AxiosPromise<IHotokoto> => {
  return axios.get('https://v1.hitokoto.cn', { baseURL: '' })
}
