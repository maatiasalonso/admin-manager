"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const save = () => {
    setIsLoading(true);
    //TODO: save exclusion item on db and show success message modal, then update table with new data
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Exclusion
              </ModalHeader>
              <ModalBody>
                <Textarea
                  variant="bordered"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  description="Enter a concise description of your exclusion."
                  className="w-full"
                  minRows={6}
                  maxRows={8}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  onClick={onClose}
                  className="hover:bg-default-200  hover:dark:text-white hover:dark:bg-default-100"
                  isDisabled={isLoading}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  className="hover:bg-primary-300 hover:dark:bg-primary-100"
                  isLoading={isLoading}
                  onClick={save}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
