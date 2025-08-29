"use client"

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";

const SidebarSheet = () => {
    const {data} = useSession()
    const handleLoginWithGoogleClick = () => signIn("google")
    const handleLogoutClick = () => signOut()

    console.log(data?.user)

    return ( 
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3 justify-between">
                {data?.user ? (
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={data?.user?.image ?? ""} height={18} width={18}/>
                        </Avatar>

                        <div>
                            <p className="font-bold">{data.user.name}</p>
                            <p className="text-xs">{data.user.email}</p>
                        </div>
                    </div>
                ): (
                    <>
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

                                <Button variant="outline" className="gap-1 font-bold" onClick={handleLoginWithGoogleClick}>
                                    <Image alt="Fazer login com o Google" src="/google.svg" width={18} height={18} />
                                    Google
                                </Button>
                            </DialogContent>
                        </Dialog>
                    </>
                )}

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
                <Button className="justify-start gap-2" variant="ghost" onClick={handleLogoutClick}>
                    <LogOutIcon size={18} />
                    Sair da conta
                </Button>
            </div>

        </SheetContent>
     );
}
 
export default SidebarSheet;