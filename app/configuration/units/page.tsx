"use client";
import BreadcrumbComponent from "@/components/breadcrumb";
import UnitsTable from "./table/Units";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { useEffect } from "react";

interface ParentComponentProps {
  children: React.ReactNode;
}

const Units: React.FC<ParentComponentProps> = ({ children }) => {
  const { breadcrumbArray, setBreadcrumbArray } = useBreadcrumb();

  // useEffect(() => {
  //   setBreadcrumbArray([...breadcrumbArray, { link: null, name: "Units" }]);
  // }, [breadcrumbArray, setBreadcrumbArray]);

  return (
    <>
      <BreadcrumbComponent />
      {children}

      <h1 className="text-3xl font-semibold my-8">List of Units</h1>

      <UnitsTable />
    </>
  );
};

export default Units;
