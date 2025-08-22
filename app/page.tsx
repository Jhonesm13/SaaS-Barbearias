import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jhone!</h2>
        <p>Sexta-feira, 22 de agosto.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Buscar" />
          <Button>
            <SearchIcon />
          </Button>
          
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image alt="Agende nos melhores" 
          src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

      </div>

      
      
      

    </div>
  );
}
