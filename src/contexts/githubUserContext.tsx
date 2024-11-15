import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import React from "react";

interface RepoDetailContextType {
  selectedData: any;
  setSelectedData: Dispatch<SetStateAction<any>>;
}

export const RepoDetailsContext = createContext<RepoDetailContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const RepoDetailsProvider = ({ children }: DataProviderProps) => {
  const [selectedData, setSelectedData] = useState<any>(null);

  return (
    <RepoDetailsContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </RepoDetailsContext.Provider>
  );
};

export const useRepoDetailsContext = (RepoDetailsContext: any) => {
  const context = useContext(RepoDetailsContext);
  if (context === undefined) {
    throw new Error("Some Error");
  }
  return context;
};
