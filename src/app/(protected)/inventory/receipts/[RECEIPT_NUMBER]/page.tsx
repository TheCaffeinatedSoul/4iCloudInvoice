import SelectedLayout from "@/components/layouts/selected-layout";

async function Receipts({ params }: { params: { RECEIPT_NUMBER: string } }) {
  const headerCard = [
    {
      title: "Receipt Number",
      value: params.RECEIPT_NUMBER,
    },
  ];
  return (
    <SelectedLayout
      title="Receipt"
      backLink="/inventory/receipts"
      cardDetails={headerCard}
    >
      <div className="px-2"></div>
    </SelectedLayout>
  );
}

export default Receipts;
