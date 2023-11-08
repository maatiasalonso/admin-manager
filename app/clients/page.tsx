import ClientsTable from "./table/Clients";

export default function Exclusions() {
  return (
    <>
      <h1 className="text-3xl font-semibold my-8">List of Clients</h1>

      <ClientsTable />
    </>
  );
}
