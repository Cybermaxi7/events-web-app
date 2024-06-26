import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

export default function MobileNav() {
    return (
        <nav className="md:hidden">
            <Sheet>
            <SheetTrigger className="align-middle">
                <Image src="/assets/icons/menu.svg" width={24} height={24} className="cursor-pointer" alt="Menu" />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image src="/assets/images/logo.svg" alt="Evently Logo" width={128} height={38} />
                <Separator className="border border-gray-100"/>
                <NavItems />
            </SheetContent>
        </Sheet>
        </nav>
    );
}
