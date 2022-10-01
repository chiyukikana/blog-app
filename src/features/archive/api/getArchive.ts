import { axios } from '@/lib/axios'
import { ArchiveProps, ArchiveConfigProps } from '../types'

export const getArchive = async (
  year?: string,
  month?: string
): Promise<ArchiveProps> => {
  // 请求路径
  const url =
    year && month
      ? `/archives/${year}/${month}/config.json`
      : '/archives/latest/config.json'
  // 请求配置
  const config = await axios.get<ArchiveConfigProps>(url)
  const { title, indexUrl } = config.data
  // 请求Markdown文件
  const { data: markdown } = await axios.get<string>(indexUrl)
  // 加工完成后返回
  return {
    title,
    markdown,
  }
}
