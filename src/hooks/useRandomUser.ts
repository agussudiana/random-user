import useSWR from "swr";
import { convertObjectToQueryString } from "utils/helper";

const fetcher = (key: string) => fetch(key).then((res) => res.json());
export const useRandomUser = (query: any) => {
  const queryString = convertObjectToQueryString(query);
  const endPoint = `${process.env.REACT_APP_API_URL}/api?${queryString}`;
  const { data, error } = useSWR(endPoint, fetcher, {
    revalidateOnFocus: false,
  });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
