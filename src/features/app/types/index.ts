export interface FeaturedPostProps {
  post: {
    date: string
    description: string
    image: string
    imageLabel: string
    title: string
  }
}

export interface HeaderProps {
  sections: ReadonlyArray<{
    title: string
    url: string
  }>
  title: string
}

export interface FooterProps {
  description: string
  title: string
}
