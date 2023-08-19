import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

const BreadcrumbPaymentTerms: React.FC = () => {
  return (
    <div className="flex items-center -ml-2 space-x-2">
      <Button
        variant="light"
        size="sm"
        startContent={<HomeIcon className="w-4 h-4 mr-2" />}
        href="/"
        as={NextLink}
      >
        Home
      </Button>
      <ChevronRightIcon className="w-4 h-4" />
      <Button variant="light" size="sm" href="/configuration" as={NextLink}>
        Configuration
      </Button>
      <ChevronRightIcon className="w-4 h-4" />
      <Button variant="light" size="sm">
        Pre-Saved Payment Terms
      </Button>
    </div>
  );
};

export default BreadcrumbPaymentTerms;
