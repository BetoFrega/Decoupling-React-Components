import useSWR from "swr";
import {fetcher} from "./Fetcher";

export function useGetRepositories() {
    const {data} = useSWR('https://api.github.com/users/betofrega/repos', fetcher)
    return data;
}
