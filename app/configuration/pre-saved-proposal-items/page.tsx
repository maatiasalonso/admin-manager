"use client";
import { usePathname } from "next/navigation";
import ProposalItemsTable from "./table/ProposalItems";
import { Breadcrumb } from "@/components/providers/breadcrumb";

export default function PresavedProposalItems() {
  const currentPath = usePathname();
  return (
    <>
      <Breadcrumb currentPath={currentPath} />

      <h1 className="text-3xl font-semibold my-8">
        List of Pre-Saved Proposal Items
      </h1>

      <ProposalItemsTable />
    </>
  );
}
