"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
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
    //TODO: remove proposal item and trigger modal with success message
    setTimeout(() => {
      //TODO: trigger modal with success message
    }, 3000);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="center">
        <ModalContent className="pt-8 pb-2">
          {() => (
            <>
              <ModalBody>
                <div className="w-full flex-col text-center space-y-2">
                  <div>
                    <ExclamationCircleIcon className="w-10 h-10 mx-auto text-default-600" />
                  </div>
                  <div className="text-xl">
                    Are you sure you want to delete this item?
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="w-full flex justify-center">
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
                  Delete
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
