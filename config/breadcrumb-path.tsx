import {
  BanknotesIcon,
  Cog8ToothIcon,
  DocumentIcon,
  DocumentTextIcon,
  HomeIcon,
  NoSymbolIcon,
  PencilIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const homePath = [
  {
    key: "/",
    items: [
      {
        name: "Home",
        href: "/",
        icon: <HomeIcon className="w-4 h-4 mr-1" />,
      },
    ],
  },
];

const [homePathItem] = homePath;

const configPath = [
  {
    key: "/configuration",
    items: [
      ...homePathItem.items,
      {
        name: "Configuration",
        href: "/configuration",
        icon: <Cog8ToothIcon className="w-4 h-4 mr-1" />,
      },
    ],
  },
];

const [configPathItem] = configPath;

const exclusionsPath = [
  {
    key: "/configuration/exclusions",
    items: [
      ...configPathItem.items,
      {
        name: "Exclusions",
        href: "/configuration/exclusions",
        icon: <NoSymbolIcon className="h-4 w-4 text-danger mr-1" />,
      },
    ],
  },
];

const presavedPaymentTermsPath = [
  {
    key: "/configuration/pre-saved-payment-terms",
    items: [
      ...configPathItem.items,
      {
        name: "Pre-Saved Payment Terms",
        href: "/configuration/pre-saved-payment-terms",
        icon: (
          <div className="relative w-4 h-4 flex mr-1">
            <DocumentIcon className="w-4 h-4 relative text-gray-700 dark:text-gray-300" />
            <BanknotesIcon className="w-2 h-2 absolute bottom-0 right-0 text-success-600 bg-white dark:bg-zinc-900" />
          </div>
        ),
      },
    ],
  },
];

const presavedProposalItemsPath = [
  {
    key: "/configuration/pre-saved-proposal-items",
    items: [
      ...configPathItem.items,
      {
        name: "Pre-Saved Proposal Items",
        href: "/configuration/pre-saved-proposal-items",
        icon: (
          <div className="relative w-4 h-4 flex mr-1">
            <DocumentTextIcon className="w-4 h-4 relative text-gray-700 dark:text-gray-300" />
            <PencilIcon className="w-2 h-2 absolute bottom-0 right-0 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300" />
          </div>
        ),
      },
    ],
  },
];

const unitsPath = [
  {
    key: "/configuration/units",
    items: [
      ...configPathItem.items,
      {
        name: "Units",
        href: "/configuration/units",
        icon: <ScaleIcon className="w-4 h-4 mr-1" />,
      },
    ],
  },
];

export const breadcrumbItems = [
  ...homePath,
  ...configPath,
  ...exclusionsPath,
  ...presavedPaymentTermsPath,
  ...presavedProposalItemsPath,
  ...unitsPath,
];
