import SelectedLayout from "@/components/layouts/selected-layout";
import { DataTable } from "@/components/ui/data-table";
import { getJournalById } from "@/service/general-ledger/journals";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/general-ledger/journals/headers";

async function JournalDetails({ params }: { params: { BATCH_ID: string } }) {
  const journalData = await getJournalById(params.BATCH_ID);

  const headerCard = [
    { title: "Batch Name", value: journalData[0]?.je_batch_name },
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