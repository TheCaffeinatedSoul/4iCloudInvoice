"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "S.No",
    header: "S.No",
    accessorKey: "S.No",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>;
    },
  },
  {
    id: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({
      row: {
        original: { HEADER_ID },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/order-management/sales-orders/${HEADER_ID}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "customer",
    accessorKey: "END_CUSTOMER_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
  },
  {
    id: "customer number",
    accessorKey: "END_CUSTOMER_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Number" />
    ),
  },
  {
    id: "customer PO",
    accessorKey: "CUST_PO_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer PO" />
    ),
  },
  {
    id: "customer contact",
    accessorKey: "SOLD_TO_CONTACT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Contact" />
    ),
  },
  {
    id: "blanket number",
    accessorKey: "BLANKET_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Blanket Number" />
    ),
  },
  {
    id: "ship to location",
    accessorKey: "SHIP_TO_LOCATION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Location" />
    ),
  },
  {
    id: "bill to location",
    accessorKey: "INVOICE_TO_LOCATION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Location" />
    ),
  },
  {
    id: "order number",
    accessorKey: "ORDER_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Number" />
    ),
  },
  {
    id: "order type",
    accessorKey: "ORDER_TYPE_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Type" />
    ),
  },
  {
    id: "ordered date",
    accessorKey: "ORDERED_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ordered Date" />
    ),
    cell: ({
      row: {
        original: { ORDERED_DATE },
      },
    }) => {
      if (!ORDERED_DATE) return "";
      const date = ORDERED_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "price list",
    accessorKey: "PRICE_LIST_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price List" />
    ),
  },
  {
    id: "salesperson",
    accessorKey: "SALESREP_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salesperson" />
    ),
  },
  {
    id: "status",
    accessorKey: "FLOW_STATUS_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "currency",
    accessorKey: "TRANSACTIONAL_CURR_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Currency" />
    ),
  },
  {
    id: "subtotal",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subtotal" />
    ),
  },
  {
    id: "tax",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax" />
    ),
  },
  {
    id: "charges",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Charges" />
    ),
  },
  {
    id: "total",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
  },
  {
    id: "payment terms",
    accessorKey: "PAYMENT_TERM_ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Terms" />
    ),
  },
  {
    id: "warehouse",
    accessorKey: "ORGANIZATION_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Warehouse" />
    ),
  },
  {
    id: "line set",
    accessorKey: "LINE_SET",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Set" />
    ),
  },
  {
    id: "fob",
    accessorKey: "FOB_POINT_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fob" />
    ),
  },
  {
    id: "shipping instructions",
    accessorKey: "SHIPPING_INSTRUCTIONS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Instructions" />
    ),
  },
  {
    id: "tax handling",
    accessorKey: "TAX_EXEMPT_FLAG",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Handling" />
    ),
  },
  {
    id: "exempt reason",
    accessorKey: "TAX_EXEMPT_REASON_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exempt Reason" />
    ),
  },
  {
    id: "amount",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    id: "credit card type",
    accessorKey: "CREDIT_CARD_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credit Card Type" />
    ),
  },
  {
    id: "card holder",
    accessorKey: "CREDIT_CARD_HOLDER_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Card Holders" />
    ),
  },
  {
    id: "approval code",
    accessorKey: "CREDIT_CARD_APPROVAL_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Code" />
    ),
  },
  {
    id: "order source",
    accessorKey: "AGREEMENT_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Source" />
    ),
  },
  {
    id: "sales channel",
    accessorKey: "SALES_CHANNEL_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sales Channel" />
    ),
  },
  {
    id: "shipping method",
    accessorKey: "SHIPPING_METHOD_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Method" />
    ),
  },
  {
    id: "freight terms",
    accessorKey: "FREIGHT_TERMS_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Freight Terms" />
    ),
  },
  {
    id: "shipment priority",
    accessorKey: "SHIPMENT_PRIORITY_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipment Priority" />
    ),
  },
  {
    id: "packing instructions",
    accessorKey: "PACKING_INSTRUCTIONS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Packing Instructions" />
    ),
  },
  {
    id: "tax exempt number",
    accessorKey: "TAX_EXEMPT_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Exempt Number" />
    ),
  },
  {
    id: "payment type",
    accessorKey: "PAYMENT_TYPE_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Type" />
    ),
  },
  {
    id: "check number",
    accessorKey: "CHECK_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Check Number" />
    ),
  },
  {
    id: "credit card number",
    accessorKey: "CREDIT_CARD_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credit Card Number" />
    ),
  },
  {
    id: "card expiration date",
    accessorKey: "CREDIT_CARD_EXPIRATION_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Card Expiration Date" />
    ),
  },
  {
    id: "prepaid amount",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prepaid Amount" />
    ),
  },
  {
    id: "order source reference",
    accessorKey: "ORIG_SYS_DOCUMENT_REF",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Source Reference" />
    ),
  },
];

export { columns };
