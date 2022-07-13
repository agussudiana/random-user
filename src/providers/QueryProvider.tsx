import React, { createContext, useState } from "react";

interface IQueryContext {
  query: any;
  setQuery: React.Dispatch<React.SetStateAction<{}>>;
}
export const QueryContext = createContext<IQueryContext>({} as IQueryContext);
type Props = {
  children: JSX.Element;
  defaultQuery: any;
};
export const QueryProvider = ({ children, defaultQuery }: Props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
