import { breadcrumbItems } from "@/config/breadcrumb-path";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

interface BreadcrumbItemInterface {
  name?: string;
  href?: string;
  icon?: React.ReactNode;
  class?: string;
}

export const Breadcrumb = ({ currentPath }: any) => {
  const currentBreadcrumbItems = breadcrumbItems.find(
    (item) => item.key === currentPath
  );

  return (
    <>
      <Breadcrumbs variant="solid" classNames={{ list: "px-3" }}>
        {currentBreadcrumbItems?.items.map((item: BreadcrumbItemInterface) => {
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
    </>
  );
};
