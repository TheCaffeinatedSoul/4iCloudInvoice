import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getJournalsBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/generalledger/journals/getjournalsbysearch?limit=${limit}&page=${page}`,
      {
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting journals by search: ", error);
  }
};

const getJournalById = async (BATCH_ID: string) => {
  try {
    const response = await axios.post(
      `/generalledger/journals/getjournalbyid`,
      {
        BATCH_ID: BATCH_ID,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error getting details by receipt id: ", error);
  }
};

const getLineDetails = async (BATCH_ID: string, HEADER_ID: string) => {
  try {
    const response = await axios.post(
      `/generalledger/journals/getlinedetails`,
      {
        BATCH_ID: BATCH_ID,
        HEADER_ID: HEADER_ID,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting line details: ", error);
  }
};

export { getJournalsBySearch, getJournalById, getLineDetails };
