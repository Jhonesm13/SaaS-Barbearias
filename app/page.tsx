import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {

  const barbershops = await db.barbershop.findMany({})

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

        <h2 className="uppercase text-xs font-bold text-gray-400 mt-6 mb-2">Agendamentos</h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sn">Vintage Barber</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-xl">22</p>
              <p className="text-sm">15:99</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="uppercase text-xs font-bold text-gray-400 mt-6 mb-2">Recomendados</h2>

        <div className="flex gap-4 overflow-auto">
          {barbershops.map(barbershop => <BarbershopItem key={barbershop.id} barbershop={barbershop} />)}
        </div>
      </div>

      
      
      

    </div>
  );
}

export default Home