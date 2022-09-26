import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { IArchiveConfig } from '../types'

export const getArchiveConfig = (
  year: string,
  month: string
): AxiosPromise<IArchiveConfig> => {
  return axios.get(`/archives/${year}/${month}/conf.json`)
}
