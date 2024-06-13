"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "#": true,
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
  "payment rate date": false,
  "payment rate type": false,
  "payment rate": false,
  "distribution set": false,
  description: false,
  "credited invoice": false,
  "match action": false,
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
  "prepayment type": false,
  "settlement date": false,
  "taxation country": false,
  "business category": false,
  "fiscal classification": false,
  "related invoice": false,
  "invoice sub type": false,
  "self assessed tax amount": false,
  "internal sequence number": false,
  "supplier tax invoice number": false,
  "internal recording date": false,
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
    id: "#",
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
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/invoice/${invoice_num}`}
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
  },
  {
    id: "payment currency",
    accessorKey: "payment_currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Currency" />
    ),
  },
  {
    id: "payment rate date",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Rate Date" />
    ),
  },
  {
    id: "payment rate type",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Rate Type" />
    ),
  },
  {
    id: "payment rate",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Rate" />
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
  },
  {
    id: "credited invoice",
    accessorKey: "credited_invoice_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credited Invoice" />
    ),
  },
  {
    id: "match action",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Match Action" />
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
    id: "prepayment type",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prepayment Type" />
    ),
  },
  {
    id: "settlement date",
    accessorKey: "earliest_settlement_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Settlement Date" />
    ),
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
    id: "fiscal classification",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fiscal Classifcation" />
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
    id: "invoice sub type",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Sub-Type" />
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
    id: "internal recording date",
    accessorKey: "total_tax_amount", //To be changed
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Internal Recording Date" />
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
