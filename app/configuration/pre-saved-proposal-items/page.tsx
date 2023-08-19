import BreadcrumbProposalItems from "./Breadcrumb";
import ProposalItemsTable from "./table/ProposalItems";

export default function App() {
  return (
    <>
      <BreadcrumbProposalItems />

      <h1 className="text-3xl font-semibold my-8">
        List of Pre-Saved Proposal Items
      </h1>

      <ProposalItemsTable />
    </>
  );
}
