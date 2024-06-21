"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "document number": true,
  "payment date": true,
  "payment currency": true,
  "payment amount": true,
  type: true,
  status: true,
  "bank account": true,
  "account currency": true,
  "voucher number": false,
  "document category": false,
  "maturity date": false,
  "supplier number": true,
  "trading partner": true,
  "supplier site": true,
  "trading partner address line 1": true,
  "trading partner address line alt": false,
  "trading partner address line 2": false,
  "trading partner address line 3": false,
  "payee country": true,
  "payment rate": false,
  "rate date": false,
  "functional amount": false,
  "payment process request": true,
  "rate type": false,
  "maturity rate date": false,
  "maturity rate type": false,
  "maturity rate": false,
  "anticipated value date": false,
  "payment method": true,
  "payment process profile": false,
  "payment document": true,
  "remit to supplier name": true,
  "remit to supplier site": true,
  "authorization number": false,
};

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
    id: "document number",
    accessorKey: "check_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Number" />
    ),
    cell: ({
      row: {
        original: { check_number },
      },
    }) => {
      const encodedInvoiceNumber = encodeURIComponent(check_number);
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/payables/checks/${encodedInvoiceNumber}`}
        >
          {check_number}
        </Link>
      );
    },
  },
  {
    id: "payment date",
    accessorKey: "check_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Date" />
    ),
    cell: ({
      row: {
        original: { check_date },
      },
    }) => {
      if (!check_date) return "";
      const date = check_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "payment currency",
    accessorKey: "currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Currency" />
    ),
  },
  {
    id: "payment amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Amount" />
    ),
  },
  {
    id: "type",
    accessorKey: "payment_type_flag_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "status",
    accessorKey: "check_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "bank account",
    accessorKey: "current_bank_account_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bank Account" />
    ),
  },
  {
    id: "account currency",
    accessorKey: "bank_currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account Currency" />
    ),
  },
  {
    id: "voucher number",
    accessorKey: "check_voucher_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Voucher Number" />
    ),
  },
  {
    id: "document category",
    accessorKey: "doc_category_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Category" />
    ),
  },
  {
    id: "maturity date",
    accessorKey: "future_pay_due_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Maturity Date" />
    ),
    cell: ({
      row: {
        original: { future_pay_due_date },
      },
    }) => {
      if (!future_pay_due_date) return "";
      const date = future_pay_due_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "supplier number",
    accessorKey: "vendor_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier Number" />
    ),
  },
  {
    id: "trading partner",
    accessorKey: "vendor_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trading Partner" />
    ),
  },
  {
    id: "supplier site",
    accessorKey: "vendor_site_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier Site" />
    ),
  },
  {
    id: "trading partner address line 1",
    accessorKey: "vendor_site_address_line1",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Trading Partner Address Line 1"
      />
    ),
  },
  {
    id: "trading partner address line alt",
    accessorKey: "vendor_site_address_line_alt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Trading Partner Address Line Alt"
      />
    ),
  },
  {
    id: "trading partner address line 2",
    accessorKey: "vendor_site_address_line2",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Trading Partner Address Line 2"
      />
    ),
  },
  {
    id: "trading partner address line 3",
    accessorKey: "vendor_site_address_line3",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Trading Partner Address Line 3"
      />
    ),
  },
  {
    id: "payee country",
    accessorKey: "vendor_country_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payee Country" />
    ),
  },
  {
    id: "payment rate",
    accessorKey: "exchange_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Rate" />
    ),
  },
  {
    id: "rate date",
    accessorKey: "exchange_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rate Date" />
    ),
    cell: ({
      row: {
        original: { exchange_date },
      },
    }) => {
      if (!exchange_date) return "";
      const date = exchange_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "functional amount",
    accessorKey: "base_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Functional Amount" />
    ),
  },
  {
    id: "payment process request",
    accessorKey: "checkrun_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Process Request" />
    ),
  },
  {
    id: "rate type",
    accessorKey: "user_rate_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rate Type" />
    ),
  },
  {
    id: "maturity rate date",
    accessorKey: "maturity_exchange_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Maturity Rate Date" />
    ),
    cell: ({
      row: {
        original: { maturity_exchange_date },
      },
    }) => {
      if (!maturity_exchange_date) return "";
      const date = maturity_exchange_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "maturity rate type",
    accessorKey: "maturity_user_rate_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Maturity Rate Type" />
    ),
  },
  {
    id: "maturity rate",
    accessorKey: "maturity_exchange_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Maturity Rate" />
    ),
  },
  {
    id: "anticipated value date",
    accessorKey: "anticipated_value_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Anticipated Value Date" />
    ),
    cell: ({
      row: {
        original: { anticipated_value_date },
      },
    }) => {
      if (!anticipated_value_date) return "";
      const date = anticipated_value_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "payment method",
    accessorKey: "payment_method_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
  },
  {
    id: "payment process profile",
    accessorKey: "payment_profile_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Process Profile" />
    ),
  },
  {
    id: "payment document",
    accessorKey: "payment_document_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Document" />
    ),
  },
  {
    id: "remit to supplier name",
    accessorKey: "remit_to_supplier_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remit To Supplier Name" />
    ),
  },
  {
    id: "remit to supplier site",
    accessorKey: "remit_to_site_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remit To Supplier Site" />
    ),
  },
  {
    id: "authorization number",
    accessorKey: "paycard_authorization_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Authorization Number" />
    ),
  },
];

export { columns };
