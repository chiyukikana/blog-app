export interface MainFeaturedPostProps {
  title: string
  description: string
  link: string
  bg: string
}

export interface FeaturedPostProps extends MainFeaturedPostProps {
  date: string
}
