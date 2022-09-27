import { AxiosPromise } from 'axios'
import { axios } from '@/lib/axios'
import { ArchiveProps } from '../types'

export const getLatestArchive = (): AxiosPromise<ArchiveProps> => {
  return axios.get(`/archives/latest/conf.json`)
}
