import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getShippingTrxBySearch = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/ordermanagement/shippingtrx/getshippingtrxbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        STATUS:data.STATUS,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting shipping transactions: ", error);
  }
};

export { getShippingTrxBySearch };
