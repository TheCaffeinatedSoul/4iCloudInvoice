"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema/loginschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { BsKey } from "react-icons/bs";

interface LoginFormProps {
  defaultValues: z.infer<typeof loginSchema>;
}

const LoginForm: React.FC<LoginFormProps> = ({ defaultValues }) => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValues,
  });

  const login = (data: z.infer<typeof loginSchema>) => {
    console.log("Form data: ", data);
  };

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        className="grid grid-cols-1 gap-4"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            form.handleSubmit(login)();
          }
        }}
      >
        {Object.keys(defaultValues).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key as "USERNAME" | "PASSWORD"}
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
                <FormControl>
                  <Input
                    {...field}
                    placeholder={`Enter ${key
                      .replace(/_/g, " ")
                      .toLowerCase()}`}
                    type={key.includes("PASSWORD") ? "password" : "text"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        ))}
      </form>
      <div className="flex justify-center pt-4">
        <Button
          variant={"default"}
          className="flex w-full items-center gap-2"
          onClick={() => {
            form.handleSubmit(login)();
          }}
        >
          <BsKey />
          Login
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
