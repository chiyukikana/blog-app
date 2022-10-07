import { axios } from '@/lib/axios'
import { ArchiveProps, ArchiveConfigProps } from '../types'

export const getArchive = async (
  year?: string,
  month?: string
): Promise<ArchiveProps> => {
  // 如果没有指定日期参数，则默认获取最新归档。
  const args = year && month ? `${year}/${month}` : 'latest'
  // 请求路径
  const url = '/archives/' + args + '/config.json'
  // 请求配置
  const {
    data: { title, indexUrl },
  } = await axios.get<ArchiveConfigProps>(url)
  // 请求Markdown文件
  const { data: markdown } = await axios.get<string>(indexUrl)
  // 加工完成后返回
  return {
    title,
    markdown,
  }
}
