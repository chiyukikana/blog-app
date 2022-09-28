import { AxiosPromise } from 'axios'
import { axios } from '@/lib/axios'
import { ArcConfigProps } from '../types'

export const getArc = (
  year: string,
  month: string
): AxiosPromise<ArcConfigProps> => {
  return axios.get(`/archives/${year}/${month}/conf.json`)
}
