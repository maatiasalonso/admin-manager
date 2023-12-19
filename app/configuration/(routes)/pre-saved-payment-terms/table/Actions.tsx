import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import MobileActionsPreSavedPaymentTerms from "../modal/mobile/Actions";

interface TableActionsProps {
  onOpenDeleteModal: () => void;
}

const TableActions: React.FC<TableActionsProps> = ({ onOpenDeleteModal }) => {
  return (
    <>
      <div className="sm:relative sm:flex justify-end items-center gap-2 hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly size="sm" variant="light">
              <EllipsisVerticalIcon className="text-default-500 w-6 h-6 font-semibold" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              startContent={
                <PencilSquareIcon className="w-5 h-5 mt-0.5 text-default-500" />
              }
            >
              Edit
            </DropdownItem>
            <DropdownItem
              className="text-danger hover:text-white"
              color="danger"
              startContent={
                <TrashIcon className="h-5 w-5 mt-0.5 currentColor" />
              }
              onClick={onOpenDeleteModal}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <MobileActionsPreSavedPaymentTerms
        onOpenDeleteModal={onOpenDeleteModal}
      />
    </>
  );
};

export default TableActions;
