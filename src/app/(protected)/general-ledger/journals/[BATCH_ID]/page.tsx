import SelectedLayout from "@/components/layouts/selected-layout";
import { DataTable } from "@/components/ui/data-table";
import { getJournalById } from "@/service/general-ledger/journals";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/general-ledger/journals/headers";
import { Value } from "@radix-ui/react-select";
import { format } from "date-fns";
import { title } from "process";

async function JournalDetails({ params }: { params: { BATCH_ID: string } }) {
  const journalData = await getJournalById(params.BATCH_ID);

  const headerCard = [
    { title: "Batch Name", value: journalData[0]?.je_batch_name },
    {
      title: "Batch Description",
      value: journalData[0]?.je_batch_description,
    },
    {
      title: "Accounted Period Type",
      value: journalData[0]?.accounted_period_type,
    },
    {
      title: "Effective date",
      value: format(journalData[0]?.effective_date.split(" ")[0], "dd-mm-yyyy"),
    },
    {
      title: "Period Set Name",
      value: journalData[0]?.period_set_name,
    },
    {
      title: "Budgetary Control Status",
      value: journalData[0]?.budgetary_control_status_meaning,
    },
  ];

  return (
    <SelectedLayout
      title="Journals"
      backLink="/general-ledger/journals"
      cardDetails={headerCard}
    >
      <div className="px-2">
        <DataTable
          title="Journals"
          data={{ data: journalData[0].gl_je_headers, pageCount: 1 }}
          columns={columns}
          initialVisibilityState={initialVisibilityState}
        />
      </div>
    </SelectedLayout>
  );
}

export default JournalDetails;
