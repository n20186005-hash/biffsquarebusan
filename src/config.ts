export const siteConfig = {
  name: 'BIFF Square',
  baseUrl: 'https://biffsquarebusan.com',
  slug: 'biffsquarebusan',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
