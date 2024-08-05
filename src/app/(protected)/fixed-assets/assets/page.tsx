"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getAssetsBySearch } from "@/service/fixed-assets/assets";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/fixed-assets/assets/assets";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues : z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  ASSET_NUMBER: "",
  PROPERTY_TYPE: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Assets = ({ searchParams }: T_SearchParamsProps) => {
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
