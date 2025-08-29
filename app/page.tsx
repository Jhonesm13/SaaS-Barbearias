import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/link";

const Home = async () => {

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc"
    }
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jhone!</h2>
        <p>Sexta-feira, 22 de agosto.</p>

        <div className="mt-6">
          <Search />
        </div>


        <div className="flex gap-3 mt-6 overflow-x-scroll">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title} asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image src={option.imageUrl}  width={16} height={16} alt={option.title} />
                {option.title}
              </Link>
            </Button>
          ))}

        </div>
        

        <div className="relative w-full h-[150px] mt-6">
          <Image alt="Agende nos melhores" 
          src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>

        <BookingItem />

        <h2 className="uppercase text-xs font-bold text-gray-400 mt-6 mb-2">Recomendados</h2>

        <div className="flex gap-4 overflow-auto">
          {barbershops.map(barbershop => <BarbershopItem key={barbershop.id} barbershop={barbershop} />)}
        </div>

        <h2 className="uppercase text-xs font-bold text-gray-400 mt-6 mb-2">Popular</h2>

        <div className="flex gap-4 overflow-auto">
          {popularBarbershops.map(barbershop => <BarbershopItem key={barbershop.id} barbershop={barbershop} />)}
        </div>

      </div>
    </div>
  );
}

export default Home