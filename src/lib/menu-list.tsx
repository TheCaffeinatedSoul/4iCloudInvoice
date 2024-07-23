import {
  Users,
  Settings,
  HandCoins,
  ReceiptText,
  Receipt,
  Package,
  DollarSign,
  FileInput,
  ShoppingBag,
  Book,
  HandHelping,
  ClipboardList,
  ClipboardPenLine,
  ScrollText,
  Truck,
  Library,
  TrendingDown,
  Package2,
  Warehouse,
} from "lucide-react";

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
          href: "/general-ledger",
          label: "General Ledger",
          active: pathname.includes("/general-ledger"),
          icon: ReceiptText,
          submenus: [
            {
              href: "/general-ledger/journals",
              label: "Journals",
              active: pathname.includes("/general-ledger/journals"),
              icon: Book,
            },
          ],
        },
        {
          href: "/payables",
          label: "Payables",
          active: pathname.includes("/payables"),
          icon: HandCoins,
          submenus: [
            {
              href: "/payables/invoices",
              label: "Invoices",
              active: pathname.includes("/payables/invoices"),
              icon: ReceiptText,
            },
            {
              href: "/payables/payments",
              label: "Payments",
              active: pathname.includes("/payables/payments"),
              icon: DollarSign,
            },
          ],
        },
        {
          href: "/receivables",
          label: "Receivables",
          active: pathname.includes("/receivables"),
          icon: FileInput,
          submenus: [
            {
              href: "/receivables/invoices",
              label: "Invoices",
              active: pathname.includes("/receivables/invoices"),
              icon: ReceiptText,
            },
            {
              href: "/receivables/receipts",
              label: "Receipts",
              active: pathname.includes("/receivables/receipts"),
              icon: Receipt,
            },
          ],
        },
        {
          href: "/fixed-assets",
          label: "Fixed Assets",
          active: pathname.includes("/fixed-assets"),
          icon: Package2,
          submenus: [
            {
              href: "/fixed-assets/assets",
              label: "Assets",
              active: pathname.includes("/fixed-assets/assets"),
              icon: Package,
            },
            {
              href: "/fixed-assets/depreciations",
              label: "Depreciations",
              active: pathname.includes("/fixed-assets/depreciations"),
              icon: TrendingDown,
            },
          ],
        },
        {
          href: "/purchase",
          label: "Purchase",
          active: pathname.includes("/purchase"),
          icon: ShoppingBag,
          submenus: [
            {
              href: "/purchase/requisition",
              label: "Requisition",
              active: pathname.includes("/purchase/requisition"),
              icon: HandHelping,
            },
            {
              href: "/purchase/purchase-order",
              label: "Purchase Order",
              active: pathname.includes("/purchase/purchase-order"),
              icon: ScrollText,
            },
          ],
        },
        {
          href: "/order-management",
          label: "Order Management",
          active: pathname.includes("/order-management"),
          icon: ClipboardList,
          submenus: [
            {
              href: "/order-management/sales-orders",
              label: "Sales Orders",
              active: pathname.includes("/order-management/sales-orders"),
              icon: ClipboardPenLine,
            },
            {
              href: "/order-management/shipping-transactions",
              label: "Shipping Transactions",
              active: pathname.includes(
                "/order-management/shipping-transactions"
              ),
              icon: ScrollText,
            },
          ],
        },
        {
          href: "/inventory",
          label: "Inventory",
          active: pathname.includes("/inventory"),
          icon: Warehouse,
          submenus: [
            {
              href: "/inventory/receipts",
              label: "Receipts",
              active: pathname.includes("/inventory/receipts"),
              icon: ReceiptText,
            },
            {
              href: "/inventory/material-transactions",
              label: "Material Transactions",
              active: pathname.includes("/inventory/material-transactions"),
              icon: ScrollText,
            },
            {
              href: "/inventory/move-orders",
              label: "Move Orders",
              active: pathname.includes("/inventory/move-orders"),
              icon: Truck,
            },
            {
              href: "/inventory/onhand-quantity",
              label: "On-hand Quantity",
              active: pathname.includes("/inventory/onhand-quantity"),
              icon: Library,
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
