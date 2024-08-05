"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { getJournalsBySearch } from "@/service/general-ledger/journals";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/general-ledger/journals/batches";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  BATCH_NAME: "",
  SOURCE: "",
  LEDGER: "",
  JOURNAL_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
  PERIOD_NAME: "",
};
const Journals = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Journals"
      columns={columns}
      defaultValues={defaultValues}
      initialVisibilityState={initialVisibilityState}
      schema={searchSchema}
      searchFunction={getJournalsBySearch}
      searchParams={searchParams}
    />
  );
};

export default Journals;
