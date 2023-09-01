import BreadcrumbComponent from "@/components/breadcrumb";
import PaymentTermsTable from "./table/PaymentTerms";

const breadcrumbArray = [
  { link: "/", name: "Home" },
  { link: "/configuration", name: "Configuration" },
  { link: null, name: "Pre-Saved Payment Terms" },
];

export default function App() {
  return (
    <>
      <BreadcrumbComponent breadcrumbArray={breadcrumbArray} />

      <h1 className="text-3xl font-semibold my-8">
        List of Pre-Saved Payment Terms
      </h1>

      <PaymentTermsTable />
    </>
  );
}
