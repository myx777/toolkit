import { DataType } from "./dataType";

export type FetchTypes = {
    url: string;
    options?: RequestInit;
}

export type FilmsFetch = {
    data: {} | DataType[];
    response: boolean;
    totalResults: number;
}