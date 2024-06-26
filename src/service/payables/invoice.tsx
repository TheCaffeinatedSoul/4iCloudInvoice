import axios from "@/api/axios";
import { searchPayload } from "@/types/types";

const getDetailsByInvoiceNumber: any = async (INVOICE_NUMBER: string) => {
  try {
    const response = await axios.post(`/payables/invoice/getdetails`, {
      INVOICE_NUMBER: INVOICE_NUMBER,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting details by invoice number", error);
  }
};

const getInvoiceBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/payables/invoice/getsearchedinvoice?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        INVOICE_NUMBER: data.INVOICE_NUMBER,
        SUPPLIER_NUMBER: data.SUPPLIER_NUMBER,
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting invoice by search: ", error);
  }
};

const getLineDetails = async (INVOICE_NUMBER: string, LINE_NUMBER: number) => {
  try {
    const response = await axios.post(`/payables/invoice/getlineinformation`, {
      INVOICE_NUMBER: INVOICE_NUMBER,
      LINE_NUMBER: LINE_NUMBER,
    });
    return response.data;
  } catch (error) {
    console.error("Error getting line details: ", error);
  }
};

export { getDetailsByInvoiceNumber, getInvoiceBySearch, getLineDetails };
