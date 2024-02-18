export type Search = {
    poster: string;
    title: string;
    year: string;
    type: string;
    imdbID: string;
}
export type DataType = {
    Search: Search[];
    Response: string;
    totalResults: string;
    Error?: string;

}

export type StateType = {
    data: DataType | null;
    loading: boolean;
    error: null | Error;
}