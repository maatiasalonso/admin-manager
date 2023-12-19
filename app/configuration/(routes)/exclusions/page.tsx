"use client";

import ExclusionsTable from "./table/Exclusions";
import { usePathname } from "next/navigation";
import { Breadcrumb } from "@/components/providers/breadcrumb";

export default function Exclusions() {
  const currentPath = usePathname();
  return (
    <>
      <Breadcrumb currentPath={currentPath} />

      <h1 className="text-3xl font-semibold my-8">List of Exclusions</h1>

      <ExclusionsTable />
    </>
  );
}
