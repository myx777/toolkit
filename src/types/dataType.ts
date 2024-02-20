export type Search = {
  Poster: string
  Title: string
  Year: string
  Type: string
  imdbID: string
}
export type DataType = {
  Search: Search[]
  Response: string
  totalResults: string
  Error?: string
}

export type StateType = {
  data: DataType | null
  loading?: boolean
  error?: null | Error
}

export type FavoriteStateType = {
  data: Search[]
}
