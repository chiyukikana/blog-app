export interface IMainFeaturedPost {
  title: string
  description: string
  link: string
  bg: string
}

export interface IFeaturedPost extends IMainFeaturedPost {
  date: string
}
