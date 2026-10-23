import { BookOpen, Gamepad2, HelpCircle, MessageCircle, Play, Users, Wrench, type LucideIcon } from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "media", path: "/media", icon: Play, isContentType: true },
  { key: "community", path: "/community", icon: MessageCircle, isContentType: true },
  { key: "faq", path: "/faq", icon: HelpCircle, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.slice(1));
