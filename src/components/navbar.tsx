import Image from "next/image";
import logo from "../../public/4i Logo_white.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-[#32012F]">
      <Image src={logo} width={"50"} alt="4i logo" />
      <Card className="flex items-center gap-2 px-1 py-0.5">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="text-sm">User</p>
            <RiArrowDropDownLine />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex justify-evenly">
              Logout <FiLogOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Card>
    </div>
  );
};

export default Navbar;
