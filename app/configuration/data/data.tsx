import {
  NoSymbolIcon,
  DocumentIcon,
  DocumentTextIcon,
  BanknotesIcon,
  PencilIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export const configurationItems = [
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
