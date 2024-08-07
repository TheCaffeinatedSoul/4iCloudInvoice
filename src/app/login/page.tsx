"use client";
import LoginForm from "@/components/login-form";
import logo from "../../../public/4i Logo_white.svg";
import landing from "../../../public/5237.jpg";
import { Card } from "@/components/ui/card";
import { loginSchema } from "@/schema/loginschema";
import { z } from "zod";
import Image from "next/image";

const defaultValues: z.infer<typeof loginSchema> = {
  USERNAME: "",
  PASSWORD: "",
};

const Login = () => {
  return (
    <div className="grid w-screen h-screen bg-[#F5EDED] align-middle justify-center md:items-center">
      <div className="grid grid-cols-12 items-center md:flex-row p-10 gap-4">
        <Card className="hidden md:flex col-span-12 md:col-span-8 content-center justify-center">
          <Image src={landing} alt="landing" className="rounded-xl" />
        </Card>
        <Card className="flex flex-col h-fit md:h-full col-span-12 md:col-span-4 p-8 gap-4 justify-evenly">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-3xl">
              <Image
                src={logo}
                height={50}
                alt="4i logo"
                className="bg-[#6482AD] rounded-lg"
              />
              Welcome!
            </div>
            <div>Please login with your credentials</div>
          </div>
          <div className="flex flex-col">
            <LoginForm defaultValues={defaultValues} />
          </div>
          <div className="flex text-xs justify-end">
            <div className="hover:text-[#6482AD] hover:cursor-pointer">
              Forgot password?
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
