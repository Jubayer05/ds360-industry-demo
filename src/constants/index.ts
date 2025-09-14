export const APP_CONFIG = {
  name: "DS-360 Industry Course",
  description: "Master Data Science for Industry Excellence",
  version: "1.0.0",
  contact: {
    email: "info@ds360.com",
    phone: "+1 (555) 123-4567",
  },
} as const;

export const NAVIGATION_MENU = [
  {
    label: "HOME",
    href: "/",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "PROFILE",
    href: "/profile",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "TRAINERS",
    href: "/trainers",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "STRUCTURE",
    href: "/structure",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "CAPACITY",
    href: "/capacity",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "ACTIVITIES",
    href: "/activities",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "TRAININGS",
    href: "/trainings",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "OUTLINES",
    href: "/outlines",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "ONGOING",
    href: "/ongoing",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "REPORTS",
    href: "/reports",
    icon: null,
    hasDropdown: false,
  },
  {
    label: "FUTURE PLAN",
    href: "/future-plan",
    icon: null,
    hasDropdown: false,
  },
] as const;

export const HERO_CONTENT = {
  title: {
    main: "Master Data Science for",
    highlight: "Industry Excellence",
  },
  description:
    "Transform your career with our comprehensive data science curriculum designed for industry professionals. Learn cutting-edge techniques and real-world applications.",
  buttons: {
    primary: {
      text: "Start Learning Today",
      href: "#",
    },
    secondary: {
      text: "View Course Catalog",
      href: "#",
    },
  },
} as const;
