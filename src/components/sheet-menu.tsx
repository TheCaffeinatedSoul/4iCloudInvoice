import { MenuIcon, PanelsTopLeft } from "lucide-react";
import Image from "next/image";
import logo from "../../public/4i Logo_white.svg";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="default" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <Image
            src={logo}
            width={"50"}
            alt="4i logo"
            className="bg-[#32012F] rounded"
          />
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
