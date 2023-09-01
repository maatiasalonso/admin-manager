import BreadcrumbComponent from "@/components/breadcrumb";
import ExclusionsTable from "./table/Exclusions";

const breadcrumbArray = [
  { link: "/", name: "Home" },
  { link: "/configuration", name: "Configuration" },
  { link: null, name: "Exclusions" },
];

export default function Exclusions() {
  return (
    <>
      <BreadcrumbComponent breadcrumbArray={breadcrumbArray} />

      <h1 className="text-3xl font-semibold my-8">List of Exclusions</h1>

      <ExclusionsTable />
    </>
  );
}
