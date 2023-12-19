"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { configurationItems } from "./data/data";
import { Breadcrumb } from "@/components/providers/breadcrumb";

const Configuration = () => {
  const router = useRouter();
  const currentPath = usePathname();

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
