import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@nextui-org/react";

interface TableTopContentProps {
  filterValue: string;
  onSearchChange: (value?: string) => void;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  clientsLength: number;
  onOpenCreateModal: () => void;
  onClear: () => void;
}

const TableTopContent: React.FC<TableTopContentProps> = ({
  filterValue,
  onSearchChange,
  onRowsPerPageChange,
  clientsLength,
  onOpenCreateModal,
  onClear,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Search by name..."
          startContent={<MagnifyingGlassIcon className="w-4 h-4" />}
          value={filterValue}
          onClear={onClear} // Using it here
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Button
            color="primary"
            onPress={onOpenCreateModal}
            endContent={<PlusIcon className="h-5 w-5 stroke-2" />}
            className="hover:bg-primary-300 hover:dark:bg-primary-100"
          >
            Add Client
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">
          Total {clientsLength} Clients
        </span>
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={onRowsPerPageChange}
            defaultValue={"10"}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default TableTopContent;
