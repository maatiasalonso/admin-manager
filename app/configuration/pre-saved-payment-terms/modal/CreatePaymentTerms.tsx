"use client";

import {
  DocumentTextIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import CreatePaymentTermItemModal from "../payment-term-item/modal/CreatePaymentTermItem";
import DeletePaymentTermItemModal from "../payment-term-item/modal/DeletePaymentTermItem";

import React, { useState } from "react";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const items = [
  {
    key: "new",
    label: "Option 1",
  },
  {
    key: "copy",
    label: "Option 2",
  },
  {
    key: "edit",
    label: "Option 3",
  },
  {
    key: "delete",
    label: "Option 4",
  },
];

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const onOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const onOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const onCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const onCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const save = () => {
    setIsLoading(true);
    //TODO: save proposal item on db and show success message modal, then update table with new data
  };

  return (
    <>
      <CreatePaymentTermItemModal
        isOpen={isCreateModalOpen}
        onClose={onCloseCreateModal}
      />

      <DeletePaymentTermItemModal
        isOpen={isDeleteModalOpen}
        onClose={onCloseDeleteModal}
      />

      <Modal isOpen={isOpen} onOpenChange={onClose} placement="center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Payment Term
              </ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  autoFocus
                  label="Name"
                  placeholder="Enter payment term name"
                  variant="bordered"
                  labelPlacement="outside"
                  startContent={
                    <DocumentTextIcon className="w-5 h-5 text-default-500" />
                  }
                />

                <label
                  htmlFor="payment-term-item"
                  className="font-semibold text-sm"
                >
                  Payment Term Item
                </label>

                <div
                  className="hs-dropdown relative w-full"
                  id="payment-term-item"
                >
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="hs-dropdown-toggle dark:hover:text-zinc-500 dark:text-zinc-400 flex hover:text-zinc-400 hover:border-zinc-400 py-2 rounded-xl items-center border-2 justify-center text-zinc-600 text-sm w-full border-zinc-600"
                    >
                      4 Payment Term Items
                    </button>
                    <Button
                      color="primary"
                      className="hover:bg-primary-300 hover:dark:bg-primary-100"
                      onPress={onOpenCreateModal}
                    >
                      <PlusIcon className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="hs-dropdown-menu min-w-[19rem] transition-[opacity,margin] duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 sm:mt-3 bg-white shadow-md rounded-xl p-2 dark:bg-zinc-900 sm:dark:border dark:border-zinc-700 dark:divide-zinc-700 before:absolute top-full border before:-top-5 before:left-0 before:w-full before:h-5">
                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] z-50">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm text-zinc-800 rounded-md py-2 px-3 hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-300"
                      >
                        Payment Term Item #1
                        <svg
                          className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-zinc-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </button>

                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-36 hidden z-50 sm:mt-3 bg-white sm:shadow-md rounded-lg p-2 dark:bg-zinc-900 sm:dark:border dark:border-zinc-700 dark:divide-zinc-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 left-full !mx-[10px]">
                        <Button
                          variant="light"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <PencilSquareIcon className="w-5 h-5 mt-0.5 text-default-500" />
                          }
                          className="hover:bg-zinc-300  hover:dark:text-zinc-400 hover:dark:bg-zinc-700 w-full dark:text-zinc-400 border-white"
                        >
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          variant="ghost"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <TrashIcon className="h-5 w-5 mt-0.5 currentColor" />
                          }
                          className="hover:bg-danger-300  hover:dark:text-white hover:dark:bg-danger-100 w-full border-none"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] z-50">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm text-zinc-800 rounded-md py-2 px-3 hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-300"
                      >
                        Payment Term Item #2
                        <svg
                          className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-zinc-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </button>

                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-36 hidden z-50 sm:mt-3 bg-white sm:shadow-md rounded-lg p-2 dark:bg-zinc-900 sm:dark:border dark:border-zinc-700 dark:divide-zinc-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 left-full !mx-[10px]">
                        <Button
                          variant="light"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <PencilSquareIcon className="w-5 h-5 mt-0.5 text-default-500" />
                          }
                          className="hover:bg-zinc-300  hover:dark:text-zinc-400 hover:dark:bg-zinc-700 w-full dark:text-zinc-400 border-white"
                        >
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          variant="ghost"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <TrashIcon className="h-5 w-5 mt-0.5 currentColor" />
                          }
                          className="hover:bg-danger-300  hover:dark:text-white hover:dark:bg-danger-100 w-full border-none"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] z-50">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm text-zinc-800 rounded-md py-2 px-3 hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-300"
                      >
                        Payment Term Item #3
                        <svg
                          className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-zinc-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </button>

                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-36 hidden z-50 sm:mt-3 bg-white sm:shadow-md rounded-lg p-2 dark:bg-zinc-900 sm:dark:border dark:border-zinc-700 dark:divide-zinc-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 left-full !mx-[10px]">
                        <Button
                          variant="light"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <PencilSquareIcon className="w-5 h-5 mt-0.5 text-default-500" />
                          }
                          className="hover:bg-zinc-300  hover:dark:text-zinc-400 hover:dark:bg-zinc-700 w-full dark:text-zinc-400 border-white"
                        >
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          variant="ghost"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <TrashIcon className="h-5 w-5 mt-0.5 currentColor" />
                          }
                          className="hover:bg-danger-300  hover:dark:text-white hover:dark:bg-danger-100 w-full border-none"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] z-50">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm text-zinc-800 rounded-md py-2 px-3 hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-300"
                      >
                        Payment Term Item #4
                        <svg
                          className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-zinc-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </button>

                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-36 hidden z-50 sm:mt-3 bg-white sm:shadow-md rounded-lg p-2 dark:bg-zinc-900 sm:dark:border dark:border-zinc-700 dark:divide-zinc-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 left-full !mx-[10px]">
                        <Button
                          variant="light"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <PencilSquareIcon className="w-5 h-5 mt-0.5 text-default-500" />
                          }
                          className="hover:bg-zinc-300  hover:dark:text-zinc-400 hover:dark:bg-zinc-700 w-full dark:text-zinc-400 border-white"
                        >
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          variant="ghost"
                          onClick={onOpenDeleteModal}
                          isLoading={isLoading}
                          startContent={
                            <TrashIcon className="h-5 w-5 mt-0.5 currentColor" />
                          }
                          className="hover:bg-danger-300  hover:dark:text-white hover:dark:bg-danger-100 w-full border-none"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
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
