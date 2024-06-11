"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { z } from "zod";

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
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Rate Date" />
    ),
  },
  {
    id: "payment rate type",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Rate Type" />
    ),
  },
  {
    id: "payment rate",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Rate" />
    ),
  },
  {
    id: "distribution set",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Distribution Set" />
    ),
  },
  {
    id: "description",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "credited invoice",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credited Invoice" />
    ),
  },
  {
    id: "match action",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Match Action" />
    ),
  },
  {
    id: "project",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project" />
    ),
  },
  {
    id: "task",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
  },
  {
    id: "expenditure item date",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Item Date" />
    ),
  },
  {
    id: "expenditure type",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Type" />
    ),
  },
  {
    id: "expenditure organization",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Organization" />
    ),
  },
  {
    id: "rate type",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rate Type" />
    ),
  },
  {
    id: "exchange date",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exchange Date" />
    ),
  },
  {
    id: "exchange rate",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exchange Rate" />
    ),
  },
  {
    id: "terms date",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Terms Date" />
    ),
  },
  {
    id: "terms",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Terms" />
    ),
  },
  {
    id: "payment method",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
  },
  {
    id: "pay group",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pay Group" />
    ),
  },
  {
    id: "prepayment type",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prepayment Type" />
    ),
  },
  {
    id: "settlement date",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Settlement Date" />
    ),
  },
  {
    id: "taxation country",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Taxation Country" />
    ),
  },
  {
    id: "business category",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Business Category" />
    ),
  },
  {
    id: "fiscal classification",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fiscal Classifcation" />
    ),
  },
  {
    id: "related invoice",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Related Invoice" />
    ),
  },
  {
    id: "invocie sub type",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Sub-Type" />
    ),
  },
  {
    id: "self assessed tax amount",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Self-Assessed Tax Amount" />
    ),
  },
  {
    id: "internal sequence number",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Internal Sequence Number" />
    ),
  },
  {
    id: "supplier tax invoice number",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Supplier Tax Invoice Number"
      />
    ),
  },
  {
    id: "internal recording date",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Internal Recording Date" />
    ),
  },
  {
    id: "supplier tax invoice date",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Supplier Tax Invoice Date"
      />
    ),
  },
  {
    id: "supplier tax invoice exchange rate",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Supplier Tax Invoice Exchange Rate"
      />
    ),
  },
  {
    id: "customs location code",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customs Location Code" />
    ),
  },
  {
    id: "remit to supplier name",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remit-To Supploer Name" />
    ),
  },
  {
    id: "remit to supplier site",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remit-To Supplier Site" />
    ),
  },
  {
    id: "remit to bank account name",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Remit-To Bank Account Name"
      />
    ),
  },
  {
    id: "remit to bank account number",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Remit-To Bank Account Number"
      />
    ),
  },
  {
    id: "release amount net of tax",
    accessorKey: "total_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Release Amount Net of Tax"
      />
    ),
  },
];

export { columns };
