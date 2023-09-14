"use client";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";

interface Breadcrumb {
  link: string | null;
  name: string;
}

const BreadcrumbComponent: React.FC = () => {
  const breadcrumbItems: JSX.Element[] = [];
  const { breadcrumbArray } = useBreadcrumb();

  breadcrumbArray.forEach((breadcrumb, index) => {
    breadcrumbItems.push(
      <Button
        key={`btn-${index}`}
        variant="light"
        size="sm"
        startContent={
          breadcrumb.link === "/" && <HomeIcon className="w-4 h-4 mr-2" />
        }
        href={breadcrumb.link ? breadcrumb.link : "#"}
        as={breadcrumb.link ? NextLink : undefined}
      >
        {breadcrumb.name}
      </Button>
    );

    if (breadcrumb.link) {
      breadcrumbItems.push(
        <ChevronRightIcon key={`icon-${index}`} className="w-4 h-4" />
      );
    }
  });

  return (
    <div className="flex items-center -ml-2 space-x-2">{breadcrumbItems}</div>
  );
};

export default BreadcrumbComponent;
