"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
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
    id: "customer",
    accessorKey: "end_customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
  },
  {
    id: "customer number",
    accessorKey: "end_customer_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Number" />
    ),
  },
  {
    id: "customer PO",
    accessorKey: "cust_po_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer PO" />
    ),
  },
  {
    id: "customer contact",
    accessorKey: "sold_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Contact" />
    ),
  },
  {
    id: "blanket number",
    accessorKey: "blanket_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Blanket Number" />
    ),
  },
  {
    id: "ship to location",
    accessorKey: "ship_to_location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Location" />
    ),
  },
  {
    id: "bill to location",
    accessorKey: "invoice_to_location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Location" />
    ),
  },
  {
    id: "order number",
    accessorKey: "order_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Number" />
    ),
  },
  {
    id: "order type",
    accessorKey: "order_type_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Type" />
    ),
  },
  {
    id: "ordered date",
    accessorKey: "ordered_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ordered Date" />
    ),
    cell: ({
      row: {
        original: { ordered_date },
      },
    }) => {
      if (!ordered_date) return "";
      const date = ordered_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "price list",
    accessorKey: "price_list_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price List" />
    ),
  },
  {
    id: "salesperson",
    accessorKey: "salesrep_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salesperson" />
    ),
  },
  {
    id: "status",
    accessorKey: "flow_status_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "currency",
    accessorKey: "transactional_curr_code",
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
    accessorKey: "payment_term_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Terms" />
    ),
  },
  {
    id: "warehouse",
    accessorKey: "organization_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Warehouse" />
    ),
  },
  {
    id: "line set",
    accessorKey: "line_set",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Set" />
    ),
  },
  {
    id: "fob",
    accessorKey: "fob_point_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fob" />
    ),
  },
  {
    id: "shipping instructions",
    accessorKey: "shipping_instructions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Instructions" />
    ),
  },
  {
    id: "tax handling",
    accessorKey: "tax_exempt_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Handling" />
    ),
  },
  {
    id: "exempt reason",
    accessorKey: "tax_exempt_reason_code",
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
    accessorKey: "credit_card_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credit Card Type" />
    ),
  },
  {
    id: "card holder",
    accessorKey: "credit_card_holder_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Card Holders" />
    ),
  },
  {
    id: "approval code",
    accessorKey: "credit_card_approval_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Code" />
    ),
  },
  {
    id: "order source",
    accessorKey: "agreement_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Source" />
    ),
  },
  {
    id: "sales channel",
    accessorKey: "sales_channel_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sales Channel" />
    ),
  },
  {
    id: "shipping method",
    accessorKey: "shipping_method_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Method" />
    ),
  },
  {
    id: "freight terms",
    accessorKey: "freight_terms_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Freight Terms" />
    ),
  },
  {
    id: "shipment priority",
    accessorKey: "shipment_priority_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipment Priority" />
    ),
  },
  {
    id: "packing instructions",
    accessorKey: "packing_instructions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Packing Instructions" />
    ),
  },
  {
    id: "tax exempt number",
    accessorKey: "tax_exempt_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Exempt Number" />
    ),
  },
  {
    id: "payment type",
    accessorKey: "payment_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Type" />
    ),
  },
  {
    id: "check number",
    accessorKey: "check_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Check Number" />
    ),
  },
  {
    id: "credit card number",
    accessorKey: "credit_card_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credit Card Number" />
    ),
  },
  {
    id: "card expiration date",
    accessorKey: "credit_card_expiration_date",
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
    accessorKey: "orig_sys_document_ref",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Source Reference" />
    ),
  },
];

export { columns };
