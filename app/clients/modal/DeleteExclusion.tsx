"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

// TODO: pass proposal item as parameter to show on delete modal

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const remove = () => {
    setIsLoading(true);
    //TODO: remove proposal exclusion and trigger modal with success message
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        hideCloseButton={isLoading}
        isDismissable={!isLoading}
      >
        <ModalContent className="pt-8 pb-2">
          {() => (
            <>
              <ModalBody>
                <div className="w-full flex-col text-center space-y-2">
                  <div>
                    <ExclamationCircleIcon className="w-10 h-10 mx-auto text-default-600" />
                  </div>
                  <div className="text-xl">
                    Are you sure you want to delete this exclusion?
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="w-full sm:flex-row flex-col-reverse justify-center">
                <Button
                  color="default"
                  onClick={onClose}
                  className="hover:bg-default-200 px-8 hover:dark:bg-default-100"
                  isDisabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onClick={remove}
                  isLoading={isLoading}
                  className="hover:bg-danger-300  hover:dark:text-white hover:dark:bg-danger-100 px-8"
                >
                  {isLoading ? "Deleting" : "Delete"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
