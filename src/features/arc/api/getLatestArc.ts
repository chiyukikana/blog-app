import { AxiosPromise } from 'axios'
import { axios } from '@/lib/axios'
import { ArcConfigProps } from '../types'

export const getLatestArc = (): AxiosPromise<ArcConfigProps> => {
  return axios.get(`/archives/latest/conf.json`)
}
