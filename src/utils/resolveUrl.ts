import { API_URL } from '@/config'

// 解析API路径
export const resolveUrl = (path: string) => {
  return path.replace(/^~/, API_URL)
}
