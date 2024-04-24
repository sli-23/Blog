import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Little Shrimp Blog',
  subtitle: '',
  lang: 'en',
  themeHue: 50,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
      theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
    {
      src: '/favicon/icon-dark.png',    
      theme: 'dark',              
      sizes: '32x32',            
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/Avatar.png',
  name: 'Little Shrimp',
  bio: 'きたいくよ',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com',
    },
    {
      name: 'Spotify',
      icon: 'fa6-brands:spotify',
      url: 'https://open.spotify.com/user/315kkjjf3z44hv7mk5ilu4kwsr5u?si=iiMHSYLlSlCz0hmbL52EfQ',
    },
    {
      name: 'Email',
      icon: 'material-symbols:mail-rounded',
      url: 'mailto:your-xxx@gmail.com',
    },
    {
      name: 'Linkedin',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com',
    },
    {
      name: 'Resume',
      icon: 'fa6-brands:readme',
      url: '',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
