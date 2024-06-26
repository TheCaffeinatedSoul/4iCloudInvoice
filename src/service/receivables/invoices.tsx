import axios from "@/api/axios";
import { searchPayload } from "@/types/types";

const getInvoiceBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/receivables/invoice/getinvoicebysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        TRANSACTION_NUMBER: data.TRANSACTION_NUMBER,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting invoice by search: ", error);
  }
};

const getTransactionDetails: any = async (TRANSACTION_NUMBER: string) => {
  try {
    const response = await axios.post(
      `/receivables/invoice/gettransactiondetails`,
      { TRANSACTION_NUMBER: TRANSACTION_NUMBER }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error getting transaction details: ", error);
  }
};

export { getInvoiceBySearch, getTransactionDetails };
