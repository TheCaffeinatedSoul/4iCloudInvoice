import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getReceiptsBySearch = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/inventory/receipts/getreceiptbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        RECEIPT_NUMBER: data.RECEIPT_NUMBER,
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting receipts by search: ", error);
  }
};

const getReceiptDetails = async (RECEIPT_NUMBER: string) => {
  try {
    const response = await axios.post(`/inventory/receipts/getreceiptdetails`, {
      RECEIPT_NUMBER: RECEIPT_NUMBER,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting receipt details: ", error);
  }
};

const getLineDetails = async (RECEIPT_NUMBER: string, LINE_ID: string) => {
  try {
    const response = await axios.post(`/inventory/receipts/getlinedetails`, {
      RECEIPT_NUMBER: RECEIPT_NUMBER,
      LINE_ID: LINE_ID,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting line details: ", error);
  }
};

export { getReceiptsBySearch, getReceiptDetails, getLineDetails };
