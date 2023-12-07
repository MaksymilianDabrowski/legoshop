import Image from "next/image";

async function getData() {
    // const query - rozkminić dokładne parametry zdjęcia w sanity
}


const Hero = () => {
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
            {/* Przykładowe zdjęcia z sanity */}
        </div>
    </section>
  )
}

export default Hero;