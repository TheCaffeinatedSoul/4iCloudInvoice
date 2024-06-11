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

interface SearchFormProps {
  onSubmit: (data: z.infer<typeof searchFormSchema>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      ORGANIZATION: "",
      INVOICE_NUMBER: "",
      SUPPLIER_NUMBER: "",
      SUPPLIER_NAME: "",
      DATE_FROM: "",
      DATE_TO: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <FormField
          control={form.control}
          name="ORGANIZATION"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input {...field} placeholder="4i Apps Solutions Pvt. Ltd" />
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
                <Input {...field} placeholder="JK00123" />
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
                <Input {...field} placeholder="9898983433" />
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
                <Input {...field} placeholder="RD International" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="DATE_FROM"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From Date</FormLabel>
              <FormControl className="w-fit">
                <Input {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="DATE_TO"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To Date</FormLabel>
              <FormControl className="w-fit">
                <Input {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchForm;
