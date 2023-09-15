import BreadcrumbComponent from "@/components/breadcrumb";
import ProposalItemsTable from "./table/ProposalItems";

const breadcrumbArray = [
  { link: "/", name: "Home" },
  { link: "/configuration", name: "Configuration" },
  { link: null, name: "Pre-Saved Proposal Items" },
];

export default function App() {
  return (
    <>
      {/* <BreadcrumbComponent breadcrumbArray={breadcrumbArray} /> */}

      <h1 className="text-3xl font-semibold my-8">
        List of Pre-Saved Proposal Items
      </h1>

      <ProposalItemsTable />
    </>
  );
}
