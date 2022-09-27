import { AxiosPromise } from 'axios'
import { axios } from '@/lib/axios'
import { ArchiveProps } from '../types'

export const getArchive = (
  year: string,
  month: string
): AxiosPromise<ArchiveProps> => {
  return axios.get(`/archives/${year}/${month}/conf.json`)
}
