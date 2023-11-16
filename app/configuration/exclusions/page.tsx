"use client";

import ExclusionsTable from "./table/Exclusions";
import {
  Cog8ToothIcon,
  HomeIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

interface BreadcrumbItemInterface {
  name: string;
  href?: string;
  icon: any;
  class?: string;
}

export default function Exclusions() {
  const items: BreadcrumbItemInterface[] = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon className="w-4 h-4 mr-1" />,
    },
    {
      name: "Configuration",
      href: "/configuration",
      icon: <Cog8ToothIcon className="w-4 h-4 mr-1" />,
    },
    {
      name: "Exclusions",
      icon: <NoSymbolIcon className="h-4 w-4 text-danger mr-1" />,
    },
  ];

  return (
    <>
      <Breadcrumbs variant="solid" classNames={{ list: "px-3" }}>
        {items.map((item: BreadcrumbItemInterface) => {
          return (
            <BreadcrumbItem
              key={item.href}
              className={`${item.class} dark:text-white text-zinc-900`}
              href={item.href}
              startContent={item.icon}
            >
              {item.name}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>

      <h1 className="text-3xl font-semibold my-8">List of Exclusions</h1>

      <ExclusionsTable />
    </>
  );
}
