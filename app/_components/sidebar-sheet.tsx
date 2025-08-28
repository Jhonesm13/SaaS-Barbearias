import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const SidebarSheet = () => {
    return ( 
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3 justify-between">
                <h2 className="font-bold">Olá, faça o seu login!</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon">
                            <LogInIcon />
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="w-[90%]">
                        <DialogHeader>
                            <DialogTitle>Faça login na plataforma</DialogTitle>
                            <DialogDescription>
                                Conecte-se usando sua conta do google.
                            </DialogDescription>
                        </DialogHeader>

                        <Button variant="outline" className="gap-1 font-bold">
                            <Image alt="Fazer login com o Google" src="/google.svg" width={18} height={18} />
                            Google
                        </Button>
                    </DialogContent>
                </Dialog>
                
                {/* <Avatar>
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>

                <div>
                    <p className="font-bold">Jhone Salvador</p>
                    <p className="text-xs">jhone.menezes@edu.pucrs.br</p>
                </div> */}
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
     );
}
 
export default SidebarSheet;