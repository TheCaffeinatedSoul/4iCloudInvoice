"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "line number": true,
  type: true,
  requestor: true,
  description: true,
  "line source": true,
  "inventory item": false,
  "validation status": false,
  "serial number": false,
  manufacturer: false,
  model: false,
  "warranty number": false,
  "matching basis": false,
  "distribution set": false,
  "account segment": false,
  "balancing segment": false,
  "cost center segment": false,
  "overlay account": false,
  "distribution account": false,
  "default account description": false,
  "prorate across all item lines": false,
  "GL date": false,
  "deferred start date": false,
  "deferred end date": false,
  "deferred number of periods": false,
  "deferred period type": false,
  "quantity invoiced": false,
  UOM: false,
  "unit price": false,
  "approval status": false,
  discarded: false,
  amount: false,
  cancelled: false,
  "income tax region": false,
  "income tax type": false,
  "prepayment invoice number": false,
  "prepayment line number": false,
  "invoice includes prepayment": false,
  "corrected invoice": false,
  "corrected invoice line number": false,
  "PO number": false,
  "PO line": false,
  "PO release": false,
  "PO distribution": false,
  "PO shipment": false,
  "receipt number": false,
  "receipt line number": false,
  "final match": false,
  "track as asset": false,
  "asset book": false,
  "asset category": false,
  project: false,
  task: false,
  "expenditure type": false,
  "expenditure item date": false,
  "expenditure organization": false,
  "project quantity": false,
  "intercompany invoice line number": false,
  "withholding tax group": false,
  "reference 1": false,
  "reference 2": false,
  "receipt verified": false,
  "receipt required": false,
  "receipt missing": false,
  "cost factor name": false,
  "control amount": false,
  "assessable value": false,
  "recoverable tax amount": false,
  "nonrecoverable tax amount": false,
  "included tax amount": false,
  "primary intended use": false,
  "ship to": false,
  "product type": false,
  "product fiscal classification": false,
  "fiscal classification": false,
  "business category": false,
  "tax regime": false,
  tax: false,
  "tax jurisdiction": false,
  "tax status": false,
  "tax rate name": false,
  "tax rate": false,
  "tax classification code": false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "line number",
    accessorKey: "line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line number" />
    ),
    cell: ({
      row: {
        original: { line_number, invoice_num },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/invoice/${invoice_num}/${line_number}`}
        >
          {line_number}
        </Link>
      );
    },
  },
  {
    id: "type",
    accessorKey: "line_type_lookup_code_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "requestor",
    accessorKey: "person_full_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requestor" />
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    // cell: ({
    //   row: {
    //     original: { description },
    //   },
    // }) => {
    //   return <Textarea value={description} readOnly />;
    // },
  },
  {
    id: "line source",
    accessorKey: "line_source_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Source" />
    ),
  },
  {
    id: "inventory item",
    accessorKey: "item_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inventory Item" />
    ),
  },
  {
    id: "validation status",
    accessorKey: "validation_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Validation Status" />
    ),
  },
  {
    id: "serial number",
    accessorKey: "serial_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Serial Number" />
    ),
  },
  {
    id: "manufacturer",
    accessorKey: "manufacturer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Manufacturer" />
    ),
  },
  {
    id: "model",
    accessorKey: "model_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
  },
  {
    id: "warranty number",
    accessorKey: "warranty_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Warranty Number" />
    ),
  },
  {
    id: "matching basis",
    accessorKey: "matching_basis",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Matching Basis" />
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
    id: "account segment",
    accessorKey: "account_segment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account Segment" />
    ),
  },
  {
    id: "balancing segment",
    accessorKey: "balancing_segment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balancing Segment" />
    ),
  },
  {
    id: "cost center segment",
    accessorKey: "cost_center_segment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cost Center Segment" />
    ),
  },
  {
    id: "overlay account",
    accessorKey: "overlay_dist_code_concat",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Overlay Account" />
    ),
  },
  {
    id: "distribution account",
    accessorKey: "default_dist_combination",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Distribution Account" />
    ),
  },
  {
    id: "default account description",
    accessorKey: "default_dist_desc",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Default Account Description"
      />
    ),
  },
  {
    id: "prorate across all item lines",
    accessorKey: "prorate_across_all_items",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Prorate Across All Item Lines"
      />
    ),
  },
  {
    id: "GL date",
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
    id: "deferred start date",
    accessorKey: "def_acctg_start_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deffered Start Date" />
    ),
    cell: ({
      row: {
        original: { def_acctg_start_date },
      },
    }) => {
      if (!def_acctg_start_date) return "";
      const date = def_acctg_start_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "deferred end date",
    accessorKey: "def_acctg_end_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deffered End Date" />
    ),
    cell: ({
      row: {
        original: { def_acctg_end_date },
      },
    }) => {
      if (!def_acctg_end_date) return "";
      const date = def_acctg_end_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "deferred number of periods",
    accessorKey: "def_acctg_number_of_periods",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Deffered Number of Periods"
      />
    ),
  },
  {
    id: "deferred period type",
    accessorKey: "def_acctg_period_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deffered Period Type" />
    ),
  },
  {
    id: "quantity invoiced",
    accessorKey: "quantity_invoiced",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Invoiced" />
    ),
  },
  {
    id: "UOM",
    accessorKey: "unit_meas_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "unit price",
    accessorKey: "unit_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit Price" />
    ),
  },
  {
    id: "approval status",
    accessorKey: "wfapproval_status_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Status" />
    ),
  },
  {
    id: "discarded",
    accessorKey: "discarded_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Discarded" />
    ),
  },
  {
    id: "amount",
    accessorKey: "original_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    id: "cancelled",
    accessorKey: "cancelled_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cancelled" />
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
    id: "income tax type",
    accessorKey: "type_1099",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Income Tax Type" />
    ),
  },
  {
    id: "prepayment invoice number",
    accessorKey: "prepay_invoice_num",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Prepayment Invoice Number"
      />
    ),
  },
  {
    id: "prepayment line number",
    accessorKey: "prepay_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prepayment Line Number" />
    ),
  },
  {
    id: "invoice includes prepayment",
    accessorKey: "invoice_includes_prepay_flag",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Invoice Includes Prepayment"
      />
    ),
  },
  {
    id: "corrected invoice",
    accessorKey: "corrected_inv_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Corrected Invoice" />
    ),
  },
  {
    id: "corrected invoice line number",
    accessorKey: "corrected_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Corrected Invoice Line Number"
      />
    ),
  },
  {
    id: "PO number",
    accessorKey: "po_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Number" />
    ),
  },
  {
    id: "PO line",
    accessorKey: "po_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Line" />
    ),
  },
  {
    id: "PO release",
    accessorKey: "po_release_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Release" />
    ),
  },
  {
    id: "PO distribution",
    accessorKey: "po_distribution_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Distribution" />
    ),
  },
  {
    id: "PO shipment",
    accessorKey: "shipment_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Shipment" />
    ),
  },
  {
    id: "receipt number",
    accessorKey: "receipt_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Number" />
    ),
  },
  {
    id: "receipt line number",
    accessorKey: "shipment_line_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Line Number" />
    ),
  },
  {
    id: "final match",
    accessorKey: "final_match_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Final Match" />
    ),
  },
  {
    id: "track as asset",
    accessorKey: "assets_tracking_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Track as Asset" />
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
    id: "asset category",
    accessorKey: "asset_category_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Category" />
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
    id: "expenditure type",
    accessorKey: "expenditure_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Type" />
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
    accessorKey: "expenditure_organization_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Organization" />
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
    id: "intercompany invoice line number",
    accessorKey: "pa_cc_ar_invoice_lin_num",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Intercompany Invoice Line Number"
      />
    ),
  },
  {
    id: "withholding tax group",
    accessorKey: "group_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Withholding Tax Group" />
    ),
  },
  {
    id: "reference 1",
    accessorKey: "reference_1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference 1" />
    ),
  },
  {
    id: "reference 2",
    accessorKey: "reference_2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference 2" />
    ),
  },
  {
    id: "receipt verified",
    accessorKey: "receipt_verified_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Verified" />
    ),
  },
  {
    id: "receipt required",
    accessorKey: "receipt_required_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Required" />
    ),
  },
  {
    id: "receipt missing",
    accessorKey: "receipt_missing_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Missing" />
    ),
  },
  {
    id: "cost factor name",
    accessorKey: "cost_factor_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cost Factor Name" />
    ),
  },
  {
    id: "control amount",
    accessorKey: "control_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Control Amount" />
    ),
  },
  {
    id: "assessable value",
    accessorKey: "assessable_value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assessable Value" />
    ),
  },
  {
    id: "recoverable tax amount",
    accessorKey: "total_rec_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recoverable Tax Amount" />
    ),
  },
  {
    id: "nonrecoverable tax amount",
    accessorKey: "total_nrec_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nonrecoverable Tax Amount"
      />
    ),
  },
  {
    id: "included tax amount",
    accessorKey: "included_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Included Tax Amount" />
    ),
  },
  {
    id: "primary intended use",
    accessorKey: "primary_intended_use",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primary Intended Use" />
    ),
  },
  {
    id: "ship to",
    accessorKey: "ship_to_location_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To" />
    ),
  },
  {
    id: "product type",
    accessorKey: "product_type_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Type" />
    ),
  },
  {
    id: "product fiscal classification",
    accessorKey: "product_fisc_classification",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Product Fiscal Classification"
      />
    ),
  },
  {
    id: "fiscal classification",
    accessorKey: "user_defined_fisc_class",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fiscal Classification" />
    ),
  },
  {
    id: "business category",
    accessorKey: "trx_business_category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Business Category" />
    ),
  },
  {
    id: "tax regime",
    accessorKey: "tax_regime_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Regime" />
    ),
  },
  {
    id: "tax",
    accessorKey: "tax",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax" />
    ),
  },
  {
    id: "tax jurisdiction",
    accessorKey: "tax_jurisdictaion_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Jurisdiction" />
    ),
  },
  {
    id: "tax status",
    accessorKey: "tax_status_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Status" />
    ),
  },
  {
    id: "tax rate name",
    accessorKey: "tax_rate_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Rate Name" />
    ),
  },
  {
    id: "tax rate",
    accessorKey: "tax_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Rate" />
    ),
  },
  {
    id: "tax classification code",
    accessorKey: "tax_classification_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Classification Code" />
    ),
  },
];
export { columns };
