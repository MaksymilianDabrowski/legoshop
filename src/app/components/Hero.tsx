import Image from "next/image";
import {client, urlFor} from "../lib/sanity"

async function getData() {
     const query  = "*[_type == 'heroImage'][0]";

     const data = await client.fetch(query);
     return data;
}


const Hero = async () => {
    const data = await getData();
  return ( // Trzeba ogarnąć tekst, formatownie tekstu po lewej stronie a zdjęcia po prawej
    <section className="max-w-2xl px-4 sm:pb-6 lb:max-w-7xl lg:px-8"> {/*Teskt na środku strony*/ }
        <div className="mb-8 flex flex-wrap flex-col justify-center sm:mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
                Zestawy klocków LEGO no cap 4 real
            </h1>
            <p className="max-w-md leading-relaxed text-gray">
                Sprzedajemy klocki po najlepszej cenie itp
            </p>
        </div>

        <div className="mb-12 flex w-full">
            <Image src={urlFor(data.image).url()} alt={"Główne zdjęcie"} className="h-full w-full object-cover object-center"width={500} height={500}/>
            {/* Przykładowe zdjęcia z sanity */}
        </div>
    </section>
  )
}

export default Hero;