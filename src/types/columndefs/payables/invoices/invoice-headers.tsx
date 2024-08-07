"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "invoice number": true,
  "operating unit": true,
  "customer taxpayer id": false,
  type: false,
  "po number": false,
  "trading partner": true,
  "supplier number": true,
  "supplier site code": true,
  "invoice date": true,
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
  "tax invoice recording data": false,
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
    id: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({
      row: {
        original: { invoice_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "#6482AD" }}
          href={`/payables/invoices/${invoice_id}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "invoice number",
    accessorKey: "invoice_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Number" />
    ),
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
    id: "tax invoice recording date",
    accessorKey: "tax_invoice_recording_date",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Tax Invoice Recording Date"
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
  {
    id: "invoice id",
    accessorKey: "invoice_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Id" />
    ),
  },
  {
    id: "vendor id",
    accessorKey: "vendor_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor Id" />
    ),
  },
  {
    id: "org name",
    accessorKey: "org_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Org Name" />
    ),
  },
  {
    id: "org code",
    accessorKey: "org_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Org Code" />
    ),
  },
  {
    id: "set of books id",
    accessorKey: "set_of_books_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Set Of Books Id" />
    ),
  },
  {
    id: "ledger name",
    accessorKey: "ledger_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ledger Name" />
    ),
  },
  {
    id: "short name",
    accessorKey: "short_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Short Name" />
    ),
  },
  {
    id: "invoice currency description",
    accessorKey: "invoice_currency_description",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Invoice Currency Description"
      />
    ),
  },
  {
    id: "payment currency description",
    accessorKey: "payment_currency_description",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Payment Currency Description"
      />
    ),
  },
  {
    id: "payment cross rate",
    accessorKey: "payment_cross_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Cross Rate" />
    ),
  },
  {
    id: "vendor site id",
    accessorKey: "vendor_site_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor Site Id" />
    ),
  },
  {
    id: "vendor address",
    accessorKey: "vendor_address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor Address" />
    ),
  },
  {
    id: "discount amount taken",
    accessorKey: "discount_amount_taken",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Discount Amount Taken" />
    ),
  },
  {
    id: "source",
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
  },
  {
    id: "invoice type lookup code",
    accessorKey: "invoice_type_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Type Lookup Code" />
    ),
  },
  {
    id: "batch id",
    accessorKey: "batch_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Batch Id" />
    ),
  },
  {
    id: "batch name",
    accessorKey: "batch_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Batch Name" />
    ),
  },
  {
    id: "amount applicable to discount",
    accessorKey: "amount_applicable_to_discount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Amount Applicable To Discount"
      />
    ),
  },
  {
    id: "tax amount",
    accessorKey: "tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Amount" />
    ),
  },
  {
    id: "terms id",
    accessorKey: "terms_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Terms Id" />
    ),
  },
  {
    id: "payment method lookup code",
    accessorKey: "payment_method_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Payment Method Lookup Code"
      />
    ),
  },

  {
    id: "accts pay code combination id",
    accessorKey: "accts_pay_code_combination_id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Accts Pay Code Combination Id"
      />
    ),
  },
  {
    id: "accts pay code combination",
    accessorKey: "accts_pay_code_combination",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Accts Pay Code Combination"
      />
    ),
  },
  {
    id: "accts pay code desc",
    accessorKey: "accts_pay_code_desc",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accts Pay Code Desc" />
    ),
  },
  {
    id: "payment status flag",
    accessorKey: "payment_status_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Status Flag" />
    ),
  },
  {
    id: "base amount",
    accessorKey: "base_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Base Amount" />
    ),
  },
  {
    id: "vat code",
    accessorKey: "vat_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vat Code" />
    ),
  },
  {
    id: "exclusive payment flag",
    accessorKey: "exclusive_payment_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exclusive Payment Flag" />
    ),
  },
  {
    id: "po header id",
    accessorKey: "po_header_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Po Header Id" />
    ),
  },
  {
    id: "freight amount",
    accessorKey: "freight_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Freight Amount" />
    ),
  },
  {
    id: "goods received date",
    accessorKey: "goods_received_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Goods Received Date" />
    ),
    cell: ({
      row: {
        original: { goods_received_date },
      },
    }) => {
      if (!goods_received_date) return "";
      const date = goods_received_date.split(" ")[0];
      return format(new Date(date), "dd-MMM-yyyy");
    },
  },
  {
    id: "invoice received date",
    accessorKey: "invoice_received_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Received Date" />
    ),
    cell: ({
      row: {
        original: { invoice_received_date },
      },
    }) => {
      if (!invoice_received_date) return "";
      const date = invoice_received_date.split(" ")[0];
      return format(new Date(date), "dd-MMM-yyyy");
    },
  },
  {
    id: "voucher num",
    accessorKey: "voucher_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Voucher Num" />
    ),
  },
  {
    id: "approved amount",
    accessorKey: "approved_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approved Amount" />
    ),
  },
  {
    id: "recurring payment id",
    accessorKey: "recurring_payment_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recurring Payment Id" />
    ),
  },
  {
    id: "payment num",
    accessorKey: "payment_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Num" />
    ),
  },
  {
    id: "period name",
    accessorKey: "period_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period Name" />
    ),
  },
  {
    id: "exchange rate type",
    accessorKey: "exchange_rate_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exchange Rate Type" />
    ),
  },
  {
    id: "exchange date",
    accessorKey: "exchange_date",
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
      return format(new Date(date), "dd-MMM-yyyy");
    },
  },
  {
    id: "original prepayment amount",
    accessorKey: "original_prepayment_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Original Prepayment Amount"
      />
    ),
  },
  {
    id: "doc sequence id",
    accessorKey: "doc_sequence_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Doc Sequence Id" />
    ),
  },
  {
    id: "doc sequence value",
    accessorKey: "doc_sequence_value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Doc Sequence Value" />
    ),
  },
  {
    id: "doc category code",
    accessorKey: "doc_category_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Doc Category Code" />
    ),
  },
  {
    id: "approval description",
    accessorKey: "approval_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Description" />
    ),
  },
  {
    id: "invoice distribution total",
    accessorKey: "invoice_distribution_total",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Invoice Distribution Total"
      />
    ),
  },
  {
    id: "prepay flag",
    accessorKey: "prepay_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prepay Flag" />
    ),
  },
  {
    id: "authorized by",
    accessorKey: "authorized_by",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Authorized By" />
    ),
  },
  {
    id: "cancelled date",
    accessorKey: "cancelled_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cancelled Date" />
    ),
    cell: ({
      row: {
        original: { cancelled_date },
      },
    }) => {
      if (!cancelled_date) return "";
      const date = cancelled_date.split(" ")[0];
      return format(new Date(date), "dd-MMM-yyyy");
    },
  },
  {
    id: "cancelled by",
    accessorKey: "cancelled_by",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cancelled By" />
    ),
  },
  {
    id: "cancelled amount",
    accessorKey: "cancelled_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cancelled Amount" />
    ),
  },
  {
    id: "temp cancelled amount",
    accessorKey: "temp_cancelled_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Temp Cancelled Amount" />
    ),
  },
  {
    id: "project accounting context",
    accessorKey: "project_accounting_context",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Project Accounting Context"
      />
    ),
  },
  {
    id: "ussgl transaction code",
    accessorKey: "ussgl_transaction_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ussgl Transaction Code" />
    ),
  },
  {
    id: "ussgl trx code context",
    accessorKey: "ussgl_trx_code_context",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ussgl Trx Code Context" />
    ),
  },
  {
    id: "project id",
    accessorKey: "project_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Id" />
    ),
  },
  {
    id: "pm product code",
    accessorKey: "pm_product_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pm Product Code" />
    ),
  },
  {
    id: "pm project reference",
    accessorKey: "pm_project_reference",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pm Project Reference" />
    ),
  },
  {
    id: "task id",
    accessorKey: "task_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Id" />
    ),
  },
  {
    id: "task name",
    accessorKey: "task_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Name" />
    ),
  },
  {
    id: "pa quantity",
    accessorKey: "pa_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pa Quantity" />
    ),
  },
  {
    id: "expenditure organization id",
    accessorKey: "expenditure_organization_id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Expenditure Organization Id"
      />
    ),
  },
  {
    id: "expenditure organization code",
    accessorKey: "expenditure_organization_code",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Expenditure Organization Code"
      />
    ),
  },
  {
    id: "pa default dist ccid",
    accessorKey: "pa_default_dist_ccid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pa Default Dist Ccid" />
    ),
  },
  {
    id: "pa default dist combination",
    accessorKey: "pa_default_dist_combination",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Pa Default Dist Combination"
      />
    ),
  },
  {
    id: "pa default dist desc",
    accessorKey: "pa_default_dist_desc",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pa Default Dist Desc" />
    ),
  },
  {
    id: "vendor prepay amount",
    accessorKey: "vendor_prepay_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor Prepay Amount" />
    ),
  },
  {
    id: "payment amount total",
    accessorKey: "payment_amount_total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Amount Total" />
    ),
  },
  {
    id: "awt flag",
    accessorKey: "awt_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Awt Flag" />
    ),
  },
  {
    id: "awt group id",
    accessorKey: "awt_group_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Awt Group Id" />
    ),
  },
  {
    id: "group name",
    accessorKey: "group_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Group Name" />
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
    id: "org id",
    accessorKey: "org_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Org Id" />
    ),
  },
  {
    id: "ou short code",
    accessorKey: "ou_short_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ou Short Code" />
    ),
  },
  {
    id: "pre withholding amount",
    accessorKey: "pre_withholding_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pre Withholding Amount" />
    ),
  },
  {
    id: "auto tax calc flag",
    accessorKey: "auto_tax_calc_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Auto Tax Calc Flag" />
    ),
  },
  {
    id: "payment cross rate type",
    accessorKey: "payment_cross_rate_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Cross Rate Type" />
    ),
  },
  {
    id: "payment cross rate date",
    accessorKey: "payment_cross_rate_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Cross Rate Date" />
    ),
    cell: ({
      row: {
        original: { payment_cross_rate_date },
      },
    }) => {
      if (!payment_cross_rate_date) return "";
      const date = payment_cross_rate_date.split(" ")[0];
      return format(new Date(date), "dd-MMM-yyyy");
    },
  },
  {
    id: "pay curr invoice amount",
    accessorKey: "pay_curr_invoice_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pay Curr Invoice Amount" />
    ),
  },
  {
    id: "award id",
    accessorKey: "award_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Award Id" />
    ),
  },
  {
    id: "paid on behalf employee id",
    accessorKey: "paid_on_behalf_employee_id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Paid On Behalf Employee Id"
      />
    ),
  },
  {
    id: "employee full name",
    accessorKey: "employee_full_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employee Full Name" />
    ),
  },
  {
    id: "amt due ccard company",
    accessorKey: "amt_due_ccard_company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amt Due Ccard Company" />
    ),
  },
  {
    id: "amt due employee",
    accessorKey: "amt_due_employee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amt Due Employee" />
    ),
  },
  {
    id: "approval ready flag",
    accessorKey: "approval_ready_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Ready Flag" />
    ),
  },
  {
    id: "approval iteration",
    accessorKey: "approval_iteration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Iteration" />
    ),
  },
  {
    id: "wfapproval status",
    accessorKey: "wfapproval_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wfapproval Status" />
    ),
  },
  {
    id: "requester id",
    accessorKey: "requester_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requester Id" />
    ),
  },
  {
    id: "validation request id",
    accessorKey: "validation_request_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Validation Request Id" />
    ),
  },
  {
    id: "validated tax amount",
    accessorKey: "validated_tax_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Validated Tax Amount" />
    ),
  },
  {
    id: "quick credit",
    accessorKey: "quick_credit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quick Credit" />
    ),
  },
  {
    id: "credited invoice id",
    accessorKey: "credited_invoice_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credited Invoice Id" />
    ),
  },
  {
    id: "distribution set id",
    accessorKey: "distribution_set_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Distribution Set Id" />
    ),
  },
  {
    id: "application id",
    accessorKey: "application_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Application Id" />
    ),
  },
  {
    id: "product table",
    accessorKey: "product_table",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Table" />
    ),
  },
  {
    id: "reference key1",
    accessorKey: "reference_key1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference Key1" />
    ),
  },
  {
    id: "reference key2",
    accessorKey: "reference_key2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference Key2" />
    ),
  },
  {
    id: "reference key3",
    accessorKey: "reference_key3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference Key3" />
    ),
  },
  {
    id: "reference key4",
    accessorKey: "reference_key4",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference Key4" />
    ),
  },
  {
    id: "reference key5",
    accessorKey: "reference_key5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference Key5" />
    ),
  },
  {
    id: "tax related invoice id",
    accessorKey: "tax_related_invoice_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Related Invoice Id" />
    ),
  },
  {
    id: "trx business category",
    accessorKey: "trx_business_category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trx Business Category" />
    ),
  },
  {
    id: "user defined fisc class",
    accessorKey: "user_defined_fisc_class",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Defined Fisc Class" />
    ),
  },
  {
    id: "taxation country",
    accessorKey: "taxation_country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Taxation Country" />
    ),
  },
  {
    id: "document sub type",
    accessorKey: "document_sub_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Sub Type" />
    ),
  },
  {
    id: "legal entity id",
    accessorKey: "legal_entity_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Legal Entity Id" />
    ),
  },
  {
    id: "legal entity identifier",
    accessorKey: "legal_entity_identifier",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Legal Entity Identifier" />
    ),
  },
  {
    id: "legal entity name",
    accessorKey: "legal_entity_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Legal Entity Name" />
    ),
  },
  {
    id: "historical flag",
    accessorKey: "historical_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Historical Flag" />
    ),
  },
  {
    id: "force revalidation flag",
    accessorKey: "force_revalidation_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Force Revalidation Flag" />
    ),
  },
  {
    id: "bank charge bearer",
    accessorKey: "bank_charge_bearer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bank Charge Bearer" />
    ),
  },
  {
    id: "remittance message1",
    accessorKey: "remittance_message1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remittance Message1" />
    ),
  },
  {
    id: "remittance message2",
    accessorKey: "remittance_message2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remittance Message2" />
    ),
  },
  {
    id: "remittance message3",
    accessorKey: "remittance_message3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remittance Message3" />
    ),
  },
  {
    id: "unique remittance identifier",
    accessorKey: "unique_remittance_identifier",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Unique Remittance Identifier"
      />
    ),
  },
  {
    id: "uri check digit",
    accessorKey: "uri_check_digit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Uri Check Digit" />
    ),
  },
  {
    id: "settlement priority",
    accessorKey: "settlement_priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Settlement Priority" />
    ),
  },
  {
    id: "payment reason code",
    accessorKey: "payment_reason_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Reason Code" />
    ),
  },
  {
    id: "payment reason comments",
    accessorKey: "payment_reason_comments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Reason Comments" />
    ),
  },
  {
    id: "payment method code",
    accessorKey: "payment_method_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method Code" />
    ),
  },
  {
    id: "delivery channel code",
    accessorKey: "delivery_channel_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delivery Channel Code" />
    ),
  },
  {
    id: "quick po header id",
    accessorKey: "quick_po_header_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quick Po Header Id" />
    ),
  },
  {
    id: "net of retainage flag",
    accessorKey: "net_of_retainage_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Net Of Retainage Flag" />
    ),
  },
  {
    id: "party id",
    accessorKey: "party_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Party Id" />
    ),
  },
  {
    id: "party number",
    accessorKey: "party_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Party Number" />
    ),
  },
  {
    id: "party name",
    accessorKey: "party_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Party Name" />
    ),
  },
  {
    id: "party site id",
    accessorKey: "party_site_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Party Site Id" />
    ),
  },
  {
    id: "party site number",
    accessorKey: "party_site_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Party Site Number" />
    ),
  },
  {
    id: "pay proc trxn type code",
    accessorKey: "pay_proc_trxn_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pay Proc Trxn Type Code" />
    ),
  },
  {
    id: "payment function",
    accessorKey: "payment_function",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Function" />
    ),
  },
  {
    id: "cust registration code",
    accessorKey: "cust_registration_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cust Registration Code" />
    ),
  },
  {
    id: "external bank account id",
    accessorKey: "external_bank_account_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="External Bank Account Id" />
    ),
  },
  {
    id: "vendor contact id",
    accessorKey: "vendor_contact_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor Contact Id" />
    ),
  },
  {
    id: "vendor contact",
    accessorKey: "vendor_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendor Contact" />
    ),
  },
  {
    id: "internal contact email",
    accessorKey: "internal_contact_email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Internal Contact Email" />
    ),
  },
  {
    id: "disc is inv less tax flag",
    accessorKey: "disc_is_inv_less_tax_flag",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Disc Is Inv Less Tax Flag"
      />
    ),
  },
  {
    id: "exclude freight from discount",
    accessorKey: "exclude_freight_from_discount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Exclude Freight From Discount"
      />
    ),
  },
  {
    id: "pay awt group id",
    accessorKey: "pay_awt_group_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pay Awt Group Id" />
    ),
  },
  {
    id: "original invoice amount",
    accessorKey: "original_invoice_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Original Invoice Amount" />
    ),
  },
  {
    id: "dispute reason",
    accessorKey: "dispute_reason",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dispute Reason" />
    ),
  },
  {
    id: "remit to supplier id",
    accessorKey: "remit_to_supplier_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remit To Supplier Id" />
    ),
  },
  {
    id: "remit to supplier site id",
    accessorKey: "remit_to_supplier_site_id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Remit To Supplier Site Id"
      />
    ),
  },
  {
    id: "relationship id",
    accessorKey: "relationship_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Relationship Id" />
    ),
  },
  {
    id: "po matched flag",
    accessorKey: "po_matched_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Po Matched Flag" />
    ),
  },
  {
    id: "validation worker id",
    accessorKey: "validation_worker_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Validation Worker Id" />
    ),
  },
  {
    id: "attribute category",
    accessorKey: "attribute_category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute Category" />
    ),
  },
  {
    id: "attribute1",
    accessorKey: "attribute1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute1" />
    ),
  },
  {
    id: "attribute2",
    accessorKey: "attribute2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute2" />
    ),
  },
  {
    id: "attribute3",
    accessorKey: "attribute3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute3" />
    ),
  },
  {
    id: "attribute4",
    accessorKey: "attribute4",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute4" />
    ),
  },
  {
    id: "attribute5",
    accessorKey: "attribute5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute5" />
    ),
  },
  {
    id: "attribute6",
    accessorKey: "attribute6",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute6" />
    ),
  },
  {
    id: "attribute7",
    accessorKey: "attribute7",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute7" />
    ),
  },
  {
    id: "attribute8",
    accessorKey: "attribute8",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute8" />
    ),
  },
  {
    id: "attribute9",
    accessorKey: "attribute9",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute9" />
    ),
  },
  {
    id: "attribute10",
    accessorKey: "attribute10",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute10" />
    ),
  },
  {
    id: "attribute11",
    accessorKey: "attribute11",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute11" />
    ),
  },
  {
    id: "attribute12",
    accessorKey: "attribute12",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute12" />
    ),
  },
  {
    id: "attribute13",
    accessorKey: "attribute13",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute13" />
    ),
  },
  {
    id: "attribute14",
    accessorKey: "attribute14",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute14" />
    ),
  },
  {
    id: "attribute15",
    accessorKey: "attribute15",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attribute15" />
    ),
  },
  {
    id: "global attribute category",
    accessorKey: "global_attribute_category",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Global Attribute Category"
      />
    ),
  },
  {
    id: "global attribute1",
    accessorKey: "global_attribute1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute1" />
    ),
  },
  {
    id: "global attribute2",
    accessorKey: "global_attribute2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute2" />
    ),
  },
  {
    id: "global attribute3",
    accessorKey: "global_attribute3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute3" />
    ),
  },
  {
    id: "global attribute4",
    accessorKey: "global_attribute4",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute4" />
    ),
  },
  {
    id: "global attribute5",
    accessorKey: "global_attribute5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute5" />
    ),
  },
  {
    id: "global attribute6",
    accessorKey: "global_attribute6",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute6" />
    ),
  },
  {
    id: "global attribute7",
    accessorKey: "global_attribute7",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute7" />
    ),
  },
  {
    id: "global attribute8",
    accessorKey: "global_attribute8",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute8" />
    ),
  },
  {
    id: "global attribute9",
    accessorKey: "global_attribute9",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute9" />
    ),
  },
  {
    id: "global attribute10",
    accessorKey: "global_attribute10",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute10" />
    ),
  },
  {
    id: "global attribute11",
    accessorKey: "global_attribute11",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute11" />
    ),
  },
  {
    id: "global attribute12",
    accessorKey: "global_attribute12",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute12" />
    ),
  },
  {
    id: "global attribute13",
    accessorKey: "global_attribute13",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute13" />
    ),
  },
  {
    id: "global attribute14",
    accessorKey: "global_attribute14",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute14" />
    ),
  },
  {
    id: "global attribute15",
    accessorKey: "global_attribute15",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute15" />
    ),
  },
  {
    id: "global attribute16",
    accessorKey: "global_attribute16",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute16" />
    ),
  },
  {
    id: "global attribute17",
    accessorKey: "global_attribute17",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute17" />
    ),
  },
  {
    id: "global attribute18",
    accessorKey: "global_attribute18",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute18" />
    ),
  },
  {
    id: "global attribute19",
    accessorKey: "global_attribute19",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute19" />
    ),
  },
  {
    id: "global attribute20",
    accessorKey: "global_attribute20",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Global Attribute20" />
    ),
  },
  {
    id: "creation date",
    accessorKey: "creation_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Creation Date" />
    ),
    cell: ({
      row: {
        original: { creation_date },
      },
    }) => {
      if (!creation_date) return "";
      const date = creation_date.split(" ")[0];
      return format(new Date(date), "dd-MMM-yyyy");
    },
  },
  {
    id: "created by",
    accessorKey: "created_by",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created By" />
    ),
  },
  {
    id: "last updated by",
    accessorKey: "last_updated_by",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Updated By" />
    ),
  },
  {
    id: "last update date",
    accessorKey: "last_update_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Update Date" />
    ),
    cell: ({
      row: {
        original: { last_update_date },
      },
    }) => {
      if (!last_update_date) return "";
      const date = last_update_date.split(" ")[0];
      return format(new Date(date), "dd-MMM-yyyy");
    },
  },
  {
    id: "last update login",
    accessorKey: "last_update_login",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Update Login" />
    ),
  },
];

export { columns };
