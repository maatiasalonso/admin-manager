"use client";
import { Breadcrumb } from "@/components/providers/breadcrumb";
import UnitsTable from "./table/Units";
import { usePathname } from "next/navigation";

const Units = () => {
  const currentPath = usePathname();

  return (
    <>
      <Breadcrumb currentPath={currentPath} />

      <h1 className="text-3xl font-semibold my-8">List of Units</h1>

      <UnitsTable />
    </>
  );
};

export default Units;
