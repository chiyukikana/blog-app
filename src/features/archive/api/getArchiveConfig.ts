import { AxiosPromise } from 'axios'
import { axios } from '@/lib/axios'
import { ArchiveConfigProps } from '../types'

export const getArchiveConfig = (
  year: string,
  month: string
): AxiosPromise<ArchiveConfigProps> => {
  return axios.get(`/archives/${year}/${month}/conf.json`)
}
