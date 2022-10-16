import { AxiosPromise } from 'axios'
import { axios } from '@/lib/axios'
import { SectionProps } from '../types'

export const getSections = (): AxiosPromise<SectionProps[]> => {
  return axios.get('/sections/sections.json')
}
