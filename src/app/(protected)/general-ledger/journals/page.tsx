"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { getJournalsBySearch } from "@/service/general-ledger/journals";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/general-ledger/journals/batches";
import { z } from "zod";

type JournalProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const defaultValues = {
  BATCH_NAME: "",
  SOURCE: "",
  LEDGER: "",
  JOURNAL_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
  PERIOD_NAME: "",
};
const Journals = ({ searchParams }: JournalProps) => {
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
