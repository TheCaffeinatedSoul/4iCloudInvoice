import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getMoveOrdersBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/inventory/moveorders/getmoveordersbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        RECEIPT_NUMBER: data.RECEIPT_NUMBER,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting move orders by search: ", error);
  }
};

const getMoveOrderDetails: any = async (HEADER_ID: string) => {
  try {
    const response = await axios.post(
      `/inventory/moveorders/getmoveorderdetails`,
      { HEADER_ID: HEADER_ID }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error getting move order details: ", error);
  }
};

export { getMoveOrdersBySearch, getMoveOrderDetails };
