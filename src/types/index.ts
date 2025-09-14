export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  price: number;
}

export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavigationMenuItem {
  label: string;
  href: string;
  icon: string | null;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}
