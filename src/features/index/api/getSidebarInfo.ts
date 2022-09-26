import { AxiosPromise } from 'axios'
import { axios } from '../../../lib/axios'
import { SidebarProps } from '../types'

export const getSidebarInfo = (): AxiosPromise<SidebarProps> => {
  return axios.get('/sidebar/sidebar.json')
}
