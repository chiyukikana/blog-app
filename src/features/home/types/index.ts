export interface SidebarProps {
  archives: ReadonlyArray<{
    url: string
    title: string
  }>
  description: string
  title: string
}

export interface HotokotoProps {
  id: number
  uuid: string
  hitokoto: string
  type: string
  from: string
  from_who: string
  creator: string
  creator_uid: number
  reviewer: number
  commit_from: string
  created_at: string
  length: number
}

export interface SectionProps {
  title: string
  url: string
}
