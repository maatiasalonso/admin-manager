import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Breadcrumb {
  link: string | null;
  name: string;
}

interface BreadcrumbContextProps {
  breadcrumbArray: Breadcrumb[];
  setBreadcrumbArray: React.Dispatch<React.SetStateAction<Breadcrumb[]>>;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps | undefined>(
  undefined
);

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
};

export const BreadcrumbProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [breadcrumbArray, setBreadcrumbArray] = useState<Breadcrumb[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbArray, setBreadcrumbArray }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
