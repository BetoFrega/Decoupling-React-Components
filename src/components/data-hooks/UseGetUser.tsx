import useSWR from "swr";
import {fetcher} from "./Fetcher";

export function useGetUser() {
    const {data} = useSWR('https://api.github.com/users/betofrega', fetcher)
    return data;
}

