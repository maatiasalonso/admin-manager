import BreadcrumbUnits from "./Breadcrumb";
import UnitsTable from "./table/Units";

export default function Units() {
  return (
    <>
      <BreadcrumbUnits />

      <h1 className="text-3xl font-semibold my-8">List of Units</h1>

      <UnitsTable />
    </>
  );
}
