import BreadcrumbExclusions from "./Breadcrumb";
import ExclusionsTable from "./table/Exclusions";

export default function Exclusions() {
  return (
    <>
      <BreadcrumbExclusions />

      <h1 className="text-3xl font-semibold my-8">List of Exclusions</h1>

      <ExclusionsTable />
    </>
  );
}
