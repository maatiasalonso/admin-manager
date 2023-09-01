import BreadcrumbComponent from "@/components/breadcrumb";
import UnitsTable from "./table/Units";

const breadcrumbArray = [
  { link: "/", name: "Home" },
  { link: "/configuration", name: "Configuration" },
  { link: null, name: "Units" },
];

export default function Units() {
  return (
    <>
      <BreadcrumbComponent breadcrumbArray={breadcrumbArray} />

      <h1 className="text-3xl font-semibold my-8">List of Units</h1>

      <UnitsTable />
    </>
  );
}
