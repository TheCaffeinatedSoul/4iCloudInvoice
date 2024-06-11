import { z } from "zod";

const serverSideSearchParams = z.object({
  query: z.string().optional(),
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
});

const paginationResponse = z.object({
  pageCount: z.number(),
});

export { serverSideSearchParams, paginationResponse };
