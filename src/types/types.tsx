type invoiceData = {
  invoice_number: string;
  invoice_date: string;
  supplier_number: string;
  supplier_name: string;
  currency: string;
  currency_code: string;
  invoice_type: string;
  amount: number;
  due_date: string;
  description: string;
  type: string;
  organization: string;
  term: string;
  lines: linesData[];
  distribution: distributionData[];
  location: locationData[];
};

type linesData = {
  line_number: string;
  item: string;
  item_name: string;
  line_desc: string;
  uom: number;
  qty: number;
  unit_price: number;
  tax_perc: number;
};

type distributionData = {
  serial_number: string;
  chart_of_account: string;
  distribution_amount: number;
  gl_date: string;
};

type locationData = {
  serial_number: string;
  location_code: string;
  location_name: string;
  qty: number;
  amount: number;
};

type searchPayload = {
  ORGANIZATION?: string;
  INVOICE_NUMBER?: string;
  CHECK_NUMBER?: string;
  SUPPLIER_NUMBER?: string;
  SUPPLIER_NAME?: string;
  FROM_DATE?: string;
  TO_DATE?: string;
  TRANSACTION_NUMBER?: string;
  REQUISITION_NUMBER?: string;
  PO_NUMBER?: string;
  BUYER?: string;
  APPROVAL_STATUS?: string;
  BANK_NAME?: string;
};

export type {
  invoiceData,
  linesData,
  distributionData,
  locationData,
  searchPayload,
};
