"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "#": true,
  "gl date": true,
  "line number": false,
  "line type": false,
  amount: false,
  "functional amount": false,
  "unit of measure": false,
  description: true,
  "income tax region": false,
  status: false,
  accounting: false,
  price: false,
  "expenditure item date": true,
  "expenditure organization": false,
  "expenditure type": false,
  "project quantity": false,
  project: false,
  task: false,
  "payment withholding tax group": false,
  "associated charges": false,
  "expense receipt date": true,
  "receipt number": false,
  "po number": false,
  "po line number": false,
  "po distribution number": false,
  "po shipment number": false,
  "corrected quantity": false,
  "asset book": false,
  "distribution class": false,
  "intended use": false,
  "recovery rate": false,
  "recovery rate name": false,
  "recovery type code": false,
  "tax regime code": false,
  tax: false,
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
    id: "gl date",
    accessorKey: "accounting_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
    cell: ({
      row: {
        original: { accounting_date },
      },
    }) => {
      if (!accounting_date) return "";
      const date = accounting_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "line number",
    accessorKey: "distribution_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
  },
  {
    id: "line type",
    accessorKey: "line_type_lookup_code_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    id: "functional amount",
    accessorKey: "base_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Functional Amount" />
    ),
  },
  {
    id: "unit of measure",
    accessorKey: "unit_of_measure",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit of Measure" />
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
    id: "income tax region",
    accessorKey: "income_tax_region",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Income Tax Region" />
    ),
  },
  {
    id: "status",
    accessorKey: "match_status_flag_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "accounting",
    accessorKey: "posted_flag_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accounting" />
    ),
  },
  {
    id: "price",
    accessorKey: "unit_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
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
    id: "expenditure organization",
    accessorKey: "expenditure_org_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Organization" />
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
    id: "project quantity",
    accessorKey: "pa_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Quantity" />
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
    id: "payment withholding tax group",
    accessorKey: "group_name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Payment Withholding Tax Group"
      />
    ),
  },
  {
    id: "associated charges",
    accessorKey: "associated_charges",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Associated Charges" />
    ),
  },
  {
    id: "expense receipt date",
    accessorKey: "start_expense_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expense Receipt Date" />
    ),
    cell: ({
      row: {
        original: { start_expense_date },
      },
    }) => {
      if (!start_expense_date) return "";
      const date = start_expense_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "receipt number",
    accessorKey: "rcv_receipt_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Number" />
    ),
  },
  {
    id: "po number",
    accessorKey: "po_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Number" />
    ),
  },
  {
    id: "po line number",
    accessorKey: "po_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Line Number" />
    ),
  },
  {
    id: "po distribution number",
    accessorKey: "po_distribution_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Distribution Number" />
    ),
  },
  {
    id: "po shipment number",
    accessorKey: "po_line_location_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Shipment Number" />
    ),
  },
  {
    id: "corrected quantity",
    accessorKey: "corrected_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Corrected Quantity" />
    ),
  },
  {
    id: "asset book",
    accessorKey: "asset_book_type_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Book" />
    ),
  },
  {
    id: "distribution class",
    accessorKey: "distribution_class_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Distribution Class" />
    ),
  },
  {
    id: "intended use",
    accessorKey: "intended_use",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Intended Use" />
    ),
  },
  {
    id: "recovery rate",
    accessorKey: "rec_nrec_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recovery Rate" />
    ),
  },
  {
    id: "recovery rate name",
    accessorKey: "recovery_rate_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recovery Rate Name" />
    ),
  },
  {
    id: "recovery type code",
    accessorKey: "recovery_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recovery Type Code" />
    ),
  },
  {
    id: "tax regime code",
    accessorKey: "tax_regime_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Regime Code" />
    ),
  },
  {
    id: "tax",
    accessorKey: "tax",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax" />
    ),
  },
];

export { columns };
