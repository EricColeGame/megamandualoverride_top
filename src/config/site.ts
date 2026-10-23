export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  officialSiteUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    reddit?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Mega Man Dual Override Wiki",
  shortName: "Mega Man Dual Override",
  logoText: "M",
  tagline: "Guides, Bosses, Custom Chips & Platforms",
  description: "Explore Mega Man: Dual Override guides, gameplay systems, Robot Masters, Custom Chips, playable characters, trailers, platforms, and the latest official news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://megamandualoverride.top",
  supportEmail: "support@megamandualoverride.top",
  gameUrl: "https://store.steampowered.com/app/4223290/Mega_Man_Dual_Override/",
  officialSiteUrl: "https://www.capcom-games.com/megaman/do/en-us/",
  heroVideoId: "uF07Tk6BhzM",
  social: {
    reddit: "https://www.reddit.com/r/Megaman/",
    youtube: "https://www.youtube.com/@capcomusa",
  },
  locales: ["en", "es", "pt", "de", "fr", "ja"],
  defaultLocale: "en",
};
