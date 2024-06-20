import { Users, Settings, HandCoins, ReceiptText, Receipt } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/payables",
          label: "Payables",
          active: pathname.includes("/payables"),
          icon: HandCoins,
          submenus: [
            {
              href: "/payables/invoice",
              label: "Invoice",
              active: pathname.includes("/invoice"),
              icon: ReceiptText,
            },
            {
              href: "/payables/checks",
              label: "Checks",
              active: pathname.includes("/checks"),
              icon: Receipt,
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
