"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "invoice number": true,
  "invoice date": true,
  "operating unit": true,
  "customer taxpayer id": false,
  type: false,
  "po number": false,
  "trading partner": true,
  "supplier number": true,
  "supplier site code": true,
  "invoice currency": true,
  "invoice amount": true,
  "tax amount": true,
  "tax control amount": false,
  "withheld amount": false,
  "prepaid amount": false,
  "gl date": false,
  "payment currency": false,
  "distribution set": false,
  description: false,
  "credited invoice": false,
  project: false,
  task: false,
  "expenditure item date": false,
  "expenditure type": false,
  "expenditure organization": false,
  "rate type": false,
  "exchange date": false,
  "exchange rate": false,
  "terms date": false,
  terms: false,
  "payment method": false,
  "pay group": false,
  "settlement date": false,
  "taxation country": false,
  "business category": false,
  "related invoice": false,
  "self assessed tax amount": false,
  "internal sequence number": false,
  "supplier tax invoice number": false,
  "supplier tax invoice date": false,
  "supplier tax invoice exchange rate": false,
  "customs location code": false,
  "remit to supplier name": false,
  "remit to supplier site": false,
  "remit to bank account name": false,
  "remit to bank account number": false,
  "release amount net of tax": false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "S.No",
    header: "S.No",
    cell: ({ row: { index }, table: { getState } }) => {
      const {
        pagination: { pageIndex, pageSize },
      } = getState();
      return pageIndex * pageSize + index + 1;
    },
  },
  {
    id: "invoice number",
    accessorKey: "invoice_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Number" />
    ),
    cell: ({
      row: {
        original: { invoice_num },
      },
    }) => {
      const encodedInvoiceNumber = encodeURIComponent(invoice_num);
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/payables/invoice/${encodedInvoiceNumber}`}
        >
          {invoice_num}
        </Link>
      );
    },
  },
  {
    id: "invoice date",
    accessorKey: "invoice_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Date" />
    ),
    cell: ({
      row: {
        original: { invoice_date },
      },
    }) => {
      if (!invoice_date) return "";
      const date = invoice_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "operating unit",
    accessorKey: "operating_unit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Operating Unit" />
    ),
  },
  {
    id: "customer taxpayer id",
    accessorKey: "cust_registration_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Taxpayer ID" />
    ),
  },
  {
    id: "type",
    accessorKey: "invoice_type_lookup_code_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "po number",
    accessorKey: "quick_po_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Number" />
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
    id: "supplier number",
    accessorKey: "vendor_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier Number" />
    ),
  },
  {
    id: "supplier site code",
    accessorKey: "vendor_site_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier Site Code" />
    ),
  },
  {
    id: "invoice currency",
    accessorKey: "invoice_currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Currency" />
    ),
  },
  {
    id: "invoice amount",
    accessorKey: "invoice_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Amount" />
    ),
  },
  {
    id: "tax amount",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Amount" />
    ),
  },
  {
    id: "tax control amount",
    accessorKey: "control_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Control Amount" />
    ),
  },
  {
    id: "withheld amount",
    accessorKey: "withheld_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Withheld Amount" />
    ),
  },
  {
    id: "prepaid amount",
    accessorKey: "prepaid_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prepaid Amount" />
    ),
  },
  {
    id: "gl date",
    accessorKey: "gl_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
    cell: ({
      row: {
        original: { gl_date },
      },
    }) => {
      if (!gl_date) return "";
      const date = gl_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "payment currency",
    accessorKey: "payment_currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Currency" />
    ),
  },
  {
    id: "distribution set",
    accessorKey: "distribution_set_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Distribution Set" />
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({
      row: {
        original: { description },
      },
    }) => {
      return <Textarea value={description} readOnly />;
    },
  },
  {
    id: "credited invoice",
    accessorKey: "credited_invoice_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credited Invoice" />
    ),
  },
  {
    id: "project",
    accessorKey: "project_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project" />
    ),
  },
  {
    id: "task",
    accessorKey: "task_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
  },
  {
    id: "expenditure item date",
    accessorKey: "expenditure_item_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Item Date" />
    ),
    cell: ({
      row: {
        original: { expenditure_item_date },
      },
    }) => {
      if (!expenditure_item_date) return "";
      const date = expenditure_item_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "expenditure type",
    accessorKey: "expenditure_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Type" />
    ),
  },
  {
    id: "expenditure organization",
    accessorKey: "expenditure_organization_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Organization" />
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
    id: "exchange date",
    accessorKey: "exchange_rate", // To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exchange Date" />
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
    id: "exchange rate",
    accessorKey: "exchange_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exchange Rate" />
    ),
  },
  {
    id: "terms date",
    accessorKey: "terms_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Terms Date" />
    ),
    cell: ({
      row: {
        original: { terms_date },
      },
    }) => {
      if (!terms_date) return "";
      const date = terms_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "terms",
    accessorKey: "terms_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Terms" />
    ),
  },
  {
    id: "payment method",
    accessorKey: "payment_method_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
  },
  {
    id: "pay group",
    accessorKey: "pay_group_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pay Group" />
    ),
  },
  {
    id: "settlement date",
    accessorKey: "earliest_settlement_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Settlement Date" />
    ),
    cell: ({
      row: {
        original: { earliest_settlement_date },
      },
    }) => {
      if (!earliest_settlement_date) return "";
      const date = earliest_settlement_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "taxation country",
    accessorKey: "taxation_country_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Taxation Country" />
    ),
  },
  {
    id: "business category",
    accessorKey: "trx_business_category_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Business Category" />
    ),
  },
  {
    id: "related invoice",
    accessorKey: "tax_related_invoice_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Related Invoice" />
    ),
  },

  {
    id: "self assessed tax amount",
    accessorKey: "self_assessed_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Self-Assessed Tax Amount" />
    ),
  },
  {
    id: "internal sequence number",
    accessorKey: "tax_invoice_internal_seq",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Internal Sequence Number" />
    ),
  },
  {
    id: "supplier tax invoice number",
    accessorKey: "supplier_tax_invoice_number",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Supplier Tax Invoice Number"
      />
    ),
  },
  {
    id: "supplier tax invoice date",
    accessorKey: "supplier_tax_invoice_date",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Supplier Tax Invoice Date"
      />
    ),
    cell: ({
      row: {
        original: { supplier_tax_invoice_date },
      },
    }) => {
      if (!supplier_tax_invoice_date) return "";
      const date = supplier_tax_invoice_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "supplier tax invoice exchange rate",
    accessorKey: "supplier_tax_exchange_rate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Supplier Tax Invoice Exchange Rate"
      />
    ),
  },
  {
    id: "customs location code",
    accessorKey: "port_of_entry_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customs Location Code" />
    ),
  },
  {
    id: "remit to supplier name",
    accessorKey: "remit_to_supplier_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remit-To Supplier Name" />
    ),
  },
  {
    id: "remit to supplier site",
    accessorKey: "remit_to_supplier_site",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remit-To Supplier Site" />
    ),
  },
  {
    id: "remit to bank account name",
    accessorKey: "bank_account_name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Remit-To Bank Account Name"
      />
    ),
  },
  {
    id: "remit to bank account number",
    accessorKey: "bank_account_num",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Remit-To Bank Account Number"
      />
    ),
  },
  {
    id: "release amount net of tax",
    accessorKey: "release_amount_net_of_tax",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Release Amount Net of Tax"
      />
    ),
  },
];

export { columns };
