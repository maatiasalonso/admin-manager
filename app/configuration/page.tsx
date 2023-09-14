"use client";
import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import BreadcrumbComponent from "@/components/breadcrumb";
import {
  NoSymbolIcon,
  DocumentIcon,
  DocumentTextIcon,
  BanknotesIcon,
  PencilIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";

interface ParentComponentProps {
  children: React.ReactNode;
}

const Configuration: React.FC<ParentComponentProps> = ({ children }) => {
  const { setBreadcrumbArray } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbArray([
      { link: "/", name: "Home" },
      { link: null, name: "Configuration" },
    ]);
  }, [setBreadcrumbArray]);

  return (
    <>
      <BreadcrumbComponent />
      {children}

      <h1 className="text-3xl font-semibold my-8">Configuration</h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-y-6">
        <Link href="/configuration/exclusions">
          <Card className="max-w-[500px] h-full" isPressable isHoverable>
            <CardHeader className="flex gap-3 mt-2">
              <div className="flex flex-col">
                <p className="text-xl ml-2 font-semibold flex gap-4">
                  <NoSymbolIcon className="h-8 w-8 text-danger" />
                  Exclusions
                </p>
              </div>
            </CardHeader>
            <CardBody className="pt-1">
              <p>
                Manage and define the various exclusions that delineate the
                parameters outside of the company&apos;s responsibility.
              </p>
            </CardBody>
          </Card>
        </Link>
        <Link href="/configuration/pre-saved-payment-terms">
          <Card className="max-w-[500px] h-full" isPressable isHoverable>
            <CardHeader className="flex gap-3 mt-2">
              <div className="flex gap-4 ml-2">
                <div className="relative w-8 h-8 flex">
                  <DocumentIcon className="w-8 h-8 relative text-gray-700 dark:text-gray-300" />
                  <BanknotesIcon className="w-4 h-4 absolute bottom-0 right-0 text-success-600 bg-white dark:bg-zinc-900" />
                </div>
                <p className="text-xl font-semibold">Pre-Saved Payment Terms</p>
              </div>
            </CardHeader>
            <CardBody className="pt-1">
              <p>Establish specific financial parameters within the system.</p>
            </CardBody>
          </Card>
        </Link>
        <Link href="/configuration/pre-saved-proposal-items">
          <Card className="max-w-[500px] h-full" isPressable isHoverable>
            <CardHeader className="flex gap-3 mt-2">
              <div className="flex gap-4 ml-2">
                <div className="relative w-8 h-8 flex">
                  <DocumentTextIcon className="w-8 h-8 relative text-gray-700 dark:text-gray-300" />
                  <PencilIcon className="w-4 h-4 absolute bottom-0 right-0 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300" />
                </div>
                <p className="text-xl font-semibold">
                  Pre-Saved Proposal Items
                </p>
              </div>
            </CardHeader>
            <CardBody className="pt-1">
              <p>
                Define specific system parameters that can be selected during
                the creation or editing of proposals.
              </p>
            </CardBody>
          </Card>
        </Link>
        <Link href="/configuration/units">
          <Card className="max-w-[500px] h-full" isPressable isHoverable>
            <CardHeader className="flex gap-3 mt-2">
              <div className="flex flex-col">
                <p className="text-xl ml-2 font-semibold flex gap-4">
                  <ScaleIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  Units
                </p>
              </div>
            </CardHeader>
            <CardBody className="pt-1">
              <p>
                Define specific system parameters that can be selected during
                the creation or editing of proposals.
              </p>
            </CardBody>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Configuration;
