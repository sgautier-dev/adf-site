import { Translations } from "@/app/lib/translations";

export function getMenu(translations: Translations) {
  return [
    { name: translations.navigation.story, href: "/story" },
    { name: translations.navigation.experiences, href: "/experiences" },
    { name: translations.navigation.contact, href: "/contact" },
  ];
}

export function getLegal(translations: Translations) {
  return [
    { name: translations.navigation.privacy, href: "/privacy" },
    { name: translations.navigation.legal, href: "/mentions" },
  ];
}
