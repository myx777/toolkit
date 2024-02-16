import { useState } from "react";
import { FetchTypes } from "../types/fetchTypes";
import { DataType } from "../types/dataType";

const useFetch = ({ url, options }: FetchTypes) => {

    const [status, setStatus] = useState<DataType>({ data: null, loading: false, error: null });

    const fetchData = async () => {
        setStatus(prevStatus => ({...prevStatus, loading: true }));
        try {
            const response = await fetch(url, options);

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const result = response.status === 204 ? null : await response.json();

            setStatus(prevStatus => ({...prevStatus, data: result}));
        } catch (e: any) {
            setStatus(prevStatus => ({...prevStatus, error: e.message}));
        } finally {
            setStatus(prevStatus => ({...prevStatus, loading: false }));
        }

    }
    return { status, fetchData };
};

export default useFetch;