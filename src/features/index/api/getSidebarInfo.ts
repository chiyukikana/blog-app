import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { ISidebar } from '../types'

export const getSidebarInfo = (): AxiosPromise<ISidebar> => {
  return axios.get('/sidebar/sidebar.json')
}
