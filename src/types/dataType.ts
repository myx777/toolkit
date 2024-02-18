export type DataType = {
    poster: string;
    title: string;
    year: string;
    type: string;
    imdbID: string;
}

export type StateType = {
    data: DataType[];
    loading: boolean;
    error: null | Error;
}