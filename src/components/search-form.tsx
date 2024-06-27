"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { MdRefresh, MdSearch } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import { Button } from "@/components/ui/button";

interface SearchFormProps {
  reset: (data: z.infer<any>) => void;
  search: (data: z.infer<any>) => void;
  defaultValues: any;
  schema: any;
  loading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  reset,
  search,
  defaultValues,
  schema,
  loading,
}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        className="grid grid-cols-1 md:grid-cols-6 gap-4"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            form.handleSubmit(search)();
          }
        }}
      >
        {Object.keys(defaultValues).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {key
                    .replace(/_/g, " ")
                    .split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </FormLabel>
                <FormControl
                  className={`${
                    key.includes("DATE") ? "justify-center w-fit md:w-full" : ""
                  }`}
                >
                  <Input
                    {...field}
                    placeholder={`Enter ${key
                      .replace(/_/g, " ")
                      .toLowerCase()}`}
                    type={key.includes("DATE") ? "date" : "text"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
      <div className="flex justify-end pt-4 gap-4">
        <Button
          variant={"outline"}
          className="flex justify-evenly items-center gap-2"
          onClick={() => reset(() => form.reset())}
          disabled={loading}
        >
          <MdRefresh />
          Refresh
        </Button>
        <Button
          className="flex justify-evenly items-center gap-2"
          onClick={form.handleSubmit(search)}
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin">
              <ImSpinner9 />
            </div>
          ) : (
            <div className="flex justify-evenly items-center gap-2">
              Search
              <MdSearch />
            </div>
          )}
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
