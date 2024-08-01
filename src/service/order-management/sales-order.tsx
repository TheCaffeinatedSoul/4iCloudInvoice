import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getSalesOrderBySearch = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/ordermanagement/salesorder/getsalesorderbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        SALESPERSON: data.SALESPERSON,
        SOURCE: data.SOURCE,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting sales order by search: ", error);
    throw error;
  }
};

const getSalesOrderDetails: any = async (HEADER_ID: string) => {
  try {
    const response = await axios.post(
      `/ordermanagement/salesorder/getsodetails`,
      {
        HEADER_ID: HEADER_ID,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error getting sales order details: ", error);
  }
};

export { getSalesOrderBySearch, getSalesOrderDetails };
