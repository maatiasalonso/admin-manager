"use client";

import { DocumentTextIcon } from "@heroicons/react/24/outline";
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
  const [mainDropdown, setMainDropdown] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(false);

  const save = () => {
    setIsLoading(true);
    //TODO: save proposal item on db and show success message modal, then update table with new data
  };

  return (
    <>
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
                <div id="navbar-collapse-basic" className="z-50 relative">
                  <div className="sm:mb-1 flex flex-col gap-5 sm:flex-row sm:items-center z-50">
                    <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] w-full">
                      <button
                        id="hs-mega-menu-basic-dr"
                        type="button"
                        className="dark:hover:text-gray-500 dark:text-gray-400 flex hover:text-gray-400 hover:border-zinc-400 py-2 rounded-xl items-center border-2 justify-center text-gray-600 text-sm w-full"
                      >
                        4 Payment Term Items
                      </button>

                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-full hidden z-50 sm:mt-3 bg-white shadow-md rounded-xl p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full border before:-top-5 before:left-0 before:w-full before:h-5">
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          About
                        </a>
                        <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] z-50">
                          <button
                            type="button"
                            className="w-full flex justify-between items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          >
                            Sub Menu
                            <svg
                              className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600"
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

                          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-50 sm:mt-3 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 left-full !mx-[10px]">
                            <a
                              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                              href="#"
                            >
                              Edit
                            </a>
                            <a
                              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>

                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Downloads
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Team Account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="relative">
                  <button
                    onClick={() => setMainDropdown(!mainDropdown)}
                    className="w-full py-2 px-4 border-2 hover:border-zinc-400 hover:text-zinc-500 dark:border-zinc-600 rounded-xl text-sm text-zinc-400 hover:dark:border-white hover:dark:text-white"
                  >
                    Select Item
                  </button>
                  {mainDropdown && (
                    <div className="absolute w-full border-2 mt-1 rounded-xl z-50">
                      <div
                        onMouseEnter={() => setNestedDropdown(true)}
                        onMouseLeave={() => setNestedDropdown(false)}
                        className="px-4 py-2 w-full"
                      >
                        Option 1
                        {nestedDropdown && (
                          <div className="absolute left-96 top-0 z-50">
                            <button
                              onClick={() => alert("Edit")}
                              className="bg-gray-500 px-4 py-2"
                            >
                              Edit
                            </button>
                            <button onClick={() => alert("Delete")}>
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                      <div>Option 2</div>
                      <div>Option 3</div>
                    </div>
                  )}
                </div> */}
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
