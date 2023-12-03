"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import {
  NoSymbolIcon,
  DocumentIcon,
  DocumentTextIcon,
  BanknotesIcon,
  PencilIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import { Breadcrumb } from "@/components/providers/breadcrumb";

const Configuration = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const configurationItems = [
    {
      title: "Exclusions",
      body: "Manage and define the various exclusions that delineate the parameters outside of the company's responsibility.",
      icon: <NoSymbolIcon className="h-8 w-8 text-danger" />,
      href: "/configuration/exclusions",
    },
    {
      title: "Pre-Saved Payment Terms",
      body: "Establish specific financial parameters within the system.",
      icon: (
        <div className="relative w-8 h-8 flex">
          <DocumentIcon className="w-8 h-8 relative text-gray-700 dark:text-gray-300" />
          <BanknotesIcon className="w-4 h-4 absolute bottom-0 right-0 text-success-600 bg-white dark:bg-zinc-900" />
        </div>
      ),
      href: "/configuration/pre-saved-payment-terms",
    },
    {
      title: "Pre-Saved Proposal Items",
      body: "Define specific system parameters that can be selected during the creation or editing of proposals.",
      icon: (
        <div className="relative w-8 h-8 flex">
          <DocumentTextIcon className="w-8 h-8 relative text-gray-700 dark:text-gray-300" />
          <PencilIcon className="w-4 h-4 absolute bottom-0 right-0 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300" />
        </div>
      ),
      href: "/configuration/pre-saved-proposal-items",
    },
    {
      title: "Units",
      body: "Define specific system parameters that can be selected during the creation or editing of proposals.",
      icon: <ScaleIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      href: "/configuration/units",
    },
  ];

  const navigate = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <Breadcrumb currentPath={currentPath} />
      <h1 className="text-3xl font-semibold my-8">Configuration</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-y-6">
        {configurationItems.map((configurationItem) => {
          return (
            <Card
              className="max-w-[500px] h-full"
              isPressable
              isHoverable
              onPress={() => {
                navigate(configurationItem.href);
              }}
              key={configurationItem.href}
            >
              <CardHeader className="flex gap-3 mt-2">
                <div className="flex gap-2">
                  {configurationItem.icon}
                  <p className="text-xl ml-2 font-semibold">
                    {configurationItem.title}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="pt-1">
                <p>{configurationItem.body}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Configuration;
