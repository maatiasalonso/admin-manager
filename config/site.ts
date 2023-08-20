export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Admin Dashboard",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Configuration",
      href: "/configuration",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Configuration",
      href: "/configuration",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
