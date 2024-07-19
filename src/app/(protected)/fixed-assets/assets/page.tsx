"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getAssetsBySearch } from "@/service/fixed-assets/assets";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/fixed-assets/assets/assets";

const defaultValues = {
  ORGANIZATION: "",
  ASSET_NUMBER: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Assets = ({ searchParams }: any) => {
  return (
    <SearchableLayout
      title="Assets"
      defaultValues={defaultValues}
      schema={searchSchema}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      searchFunction={getAssetsBySearch}
      searchParams={searchParams}
    />
  );
};

export default Assets;
