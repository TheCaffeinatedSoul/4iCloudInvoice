import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getReceiptsBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/receivables/receipts/getreceiptbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        BANK_NAME: data.BANK_NAME,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting receipts by search: ", error);
  }
};

const getReceiptDetails = async (CASH_RECEIPT_ID: string) => {
  try {
    const response = await axios.post(
      `/receivables/receipts/getreceiptdetails`,
      {
        CASH_RECEIPT_ID: CASH_RECEIPT_ID,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error getting receipt details: ", error);
  }
};

export { getReceiptsBySearch, getReceiptDetails };
