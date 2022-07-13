import { QueryContext } from "providers/QueryProvider";
import { useContext } from "react";

export const useQueryContext = () => {
  const { query, setQuery } = useContext(QueryContext);
  return {
    query,
    setQuery,
  };
};
