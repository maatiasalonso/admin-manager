"use client";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

interface TableActionsProps {
  onOpenDeleteModal: () => void;
}

const MobileActionsPreSavedProposalItems: React.FC<TableActionsProps> = ({
  onOpenDeleteModal,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="sm:hidden justify-end items-center flex">
      <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
        <EllipsisVerticalIcon className="text-default-500 w-6 h-6 font-semibold" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Proposal Item #N
              </ModalHeader>
              <ModalFooter className="w-full sm:flex-row sm:justify-end flex-col justify-center">
                <Button
                  startContent={
                    <PencilSquareIcon className="w-5 h-5 mt-0.5 text-default-500" />
                  }
                  className="hover:bg-default-200 px-8 hover:dark:bg-default-100"
                >
                  Edit
                </Button>
                <Button
                  className="hover:bg-danger-300  hover:dark:text-white hover:dark:bg-danger-100 px-8"
                  color="danger"
                  startContent={
                    <TrashIcon className="h-5 w-5 mt-0.5 currentColor" />
                  }
                  onClick={onOpenDeleteModal}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MobileActionsPreSavedProposalItems;
