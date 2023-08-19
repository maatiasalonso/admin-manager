import BreadcrumbPaymentTerms from "./Breadcrumb";
import PaymentTermsTable from "./table/PaymentTerms";

export default function App() {
  return (
    <>
      <BreadcrumbPaymentTerms />

      <h1 className="text-3xl font-semibold my-8">
        List of Pre-Saved Payment Terms
      </h1>

      <PaymentTermsTable />
    </>
  );
}
