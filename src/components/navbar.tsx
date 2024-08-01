import Image from "next/image";
import logo from "../../public/4i Logo_white.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { SheetMenu } from "./sheet-menu";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 flex justify-between items-center p-2 bg-[#6482AD] backdrop-blur-xl">
      <SheetMenu />
      <Image src={logo} width={"50"} alt="4i logo" />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2">
          {/* <Card className="flex items-center gap-2 px-1 py-0.5"> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          {/* <p className="text-sm">User</p> */}
          {/* <IoIosArrowDown /> */}
          {/* </Card> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="flex justify-between">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="text-sm">User</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-between">
            Settings
            <IoSettingsOutline />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            Logout
            <FiLogOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
