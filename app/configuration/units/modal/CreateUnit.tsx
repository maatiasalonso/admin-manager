"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const save = () => {
    setIsLoading(true);
    //TODO: save proposal item on db and show success message modal, then update table with new data
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Unit
              </ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  label="Name"
                  placeholder="Enter unit name"
                  variant="bordered"
                  labelPlacement="outside"
                  startContent={
                    <DocumentTextIcon className="w-5 h-5 text-default-500" />
                  }
                />
                <Textarea
                  variant="bordered"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  description="Enter a concise description of your unit."
                  className="w-full"
                  minRows={6}
                  maxRows={8}
                />
              </ModalBody>
              <ModalFooter className="w-full sm:flex-row sm:justify-end flex-col-reverse justify-center">
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
                  {isLoading ? "Adding" : "Add"}
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
