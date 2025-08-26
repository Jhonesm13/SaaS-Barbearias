import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <Image alt="FSW Barber" src='/logo.png' height={18} width={120}/>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>

                        <div className="py-5 border-b border-solid flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                            </Avatar>

                            <div>
                                <p className="font-bold">Jhone Salvador</p>
                                <p className="text-xs">jhone.menezes@edu.pucrs.br</p>
                            </div>
                        </div>

                        <div className="py-5 flex flex-col gap-2 border-b border-solid">
                            <SheetClose asChild>
                                <Button className="gap-2 justify-start" variant="ghost" asChild>
                                    <Link href="/">
                                        <HomeIcon size={18} />
                                        Inicio
                                    </Link>
                                </Button>    
                            </SheetClose>
                            <Button className="gap-2 justify-start" variant="ghost">
                                <CalendarIcon size={18} />
                                Agendamento
                            </Button>
                        </div>

                        <div className="py-5 flex flex-col gap-2 border-b border-solid">
                             {quickSearchOptions.map((option) => (
                                <Button className="gap-2 justify-start" variant="ghost" key={option.title}>
                                    <Image src={option.imageUrl}  width={18} height={18} alt={option.title} />
                                    {option.title}
                                </Button>
                             ))}
                        </div>

                        <div className="py-5 flex flex-col gap-2 border-b border-solid">
                            <Button className="justify-start gap-2" variant="ghost">
                                <LogOutIcon size={18} />
                                Sair da conta
                            </Button>
                        </div>

                    </SheetContent>
                </Sheet>

            </CardContent>
        </Card>
     );
}
 
export default Header;