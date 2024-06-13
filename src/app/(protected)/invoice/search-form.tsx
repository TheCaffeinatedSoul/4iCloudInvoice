"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { searchFormSchema } from "@/schema/searchformschema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { MdRefresh, MdSearch } from "react-icons/md";
import { Button } from "@/components/ui/button";

interface SearchFormProps {
  reset: (data: z.infer<any>) => void;
  search: (data: z.infer<typeof searchFormSchema>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ reset, search }) => {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      ORGANIZATION: "",
      INVOICE_NUMBER: "",
      SUPPLIER_NUMBER: "",
      SUPPLIER_NAME: "",
      FROM_DATE: "",
      TO_DATE: "",
    },
  });

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        className="grid grid-cols-1 md:grid-cols-6 gap-4"
      >
        <FormField
          control={form.control}
          name="ORGANIZATION"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter organization name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="INVOICE_NUMBER"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invoice Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter invoice number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="SUPPLIER_NUMBER"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supplier Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter supplier number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="SUPPLIER_NAME"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supplier Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter supplier name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="FROM_DATE"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From Date</FormLabel>
              <FormControl className="justify-center w-fit md:w-full">
                <Input {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="TO_DATE"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To Date</FormLabel>
              <FormControl className="justify-center w-fit md:w-full">
                <Input {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <div className="flex justify-end pt-4 gap-4">
        <Button
          variant={"outline"}
          className="flex justify-evenly items-center gap-2"
          // onClick={form.handleSubmit(reset)}
          onClick={() => reset(() => form.reset())}
        >
          <MdRefresh />
          Refresh
        </Button>
        <Button
          className="flex justify-evenly items-center gap-2"
          onClick={form.handleSubmit(search)}
        >
          Search
          <MdSearch />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
