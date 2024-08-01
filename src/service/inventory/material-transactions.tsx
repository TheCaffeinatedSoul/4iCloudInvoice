import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getMtlTrxBySearch = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/inventory/mtltrx/getmtltrxbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        ITEM: data.ITEM,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting material transactions: ", error);
  }
};

const getMtlTrxByID = async (TRANSACTION_ID: string) => {
  try {
    const response = await axios.post(`/inventory/mtltrx/getmtltrxdetails`, {
      TRANSACTION_ID: TRANSACTION_ID,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting mtl trx by id: ", error);
  }
};

export { getMtlTrxBySearch, getMtlTrxByID };
