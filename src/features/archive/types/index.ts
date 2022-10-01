export interface MarkdownProps {
  children: string
}

export interface DateProps {
  year: string
  month: string
}

export interface DateParamsProps extends DateProps {
  [key: string]: string
}

export interface ArchiveConfigProps {
  // 归档标题
  title: string
  // Markdown文件路径
  indexUrl: string
}
export interface ArchiveProps {
  title: string
  markdown: string
}
