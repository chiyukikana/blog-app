import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { IArchiveConfig } from '../types'

export const getLatestArchiveConfig = (): AxiosPromise<IArchiveConfig> => {
  return axios.get(`/archives/latest/conf.json`)
}
