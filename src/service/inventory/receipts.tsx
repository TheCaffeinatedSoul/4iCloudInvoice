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

export { getReceiptsBySearch };
