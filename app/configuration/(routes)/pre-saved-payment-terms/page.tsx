"use client";
import { usePathname } from "next/navigation";
import PaymentTermsTable from "./table/PaymentTerms";
import { Breadcrumb } from "../../../../components/providers/breadcrumb";

export default function PresavedTermItem() {
  const currentPath = usePathname();
  return (
    <>
      {/* <Breadcrumb currentPath={currentPath} /> */}

      <h1 className="text-3xl font-semibold my-8">
        List of Pre-Saved Payment Terms
      </h1>

      <PaymentTermsTable />
    </>
  );
}
