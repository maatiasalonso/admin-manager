import { siteNavItems } from "./site-nav-items";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Admin Dashboard",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [...siteNavItems],
  navMenuItems: [...siteNavItems],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
