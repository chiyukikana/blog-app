import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { ArchiveConfigProps } from '../types'

export const getLatestArchiveConfig = (): AxiosPromise<ArchiveConfigProps> => {
  return axios.get(`/archives/latest/conf.json`)
}
