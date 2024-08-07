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
import { ImSpinner9 } from "react-icons/im";
import { authenticate } from "@/lib/actions/login/actions";
import { useFormState, useFormStatus } from "react-dom";

interface LoginFormProps {
  defaultValues: z.infer<typeof loginSchema>;
}

const LoginForm: React.FC<LoginFormProps> = ({ defaultValues }) => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValues,
  });

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        className="grid grid-cols-1 gap-4"
        action={dispatch}
      >
        {Object.keys(defaultValues).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key as "USERNAME" | "PASSWORD"}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#6482AD]">
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
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        ))}
        <div className="flex w-full justify-center">
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
        <LoginButton />
      </form>
    </Form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  const handleClick = (event: any) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <div className="flex justify-center pt-4">
      <Button
        variant={"default"}
        className="flex w-full items-center gap-2"
        type="submit"
        onClick={handleClick}
        disabled={pending}
      >
        {pending ? <ImSpinner9 className="animate-spin" /> : <BsKey />}
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
