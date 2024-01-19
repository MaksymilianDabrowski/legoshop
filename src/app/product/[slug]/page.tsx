import { client } from "@/app/lib/sanity"
import ProductGallery from "@/app/components/ProductGallery";
import { fullProduct } from "@/app/interface";
import { PackageCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";



async function getData(slug: string) {
    const query = `* [_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
      }`

    const data = await client.fetch(query);
    return data;
}


export default async function ProductPage({ params }: { params: { slug: string } }) {
    const data: fullProduct = await getData(params.slug);
    return (
        <div className="bg-white max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
                <ProductGallery images={data.images} /> {/* data.images - jednak odrębny interfejs xd */}
                <div className="md:py-8">
                    <div className="mb-2 md:mb-3">
                        <span className="mb-8 inline-block text-gray-500 font-semibold">{data.categoryName}</span>
                        <h2 className=" mb-6 text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                    </div>

                    <div className="mb-4">
                        <div className="flex items-end gap-2 mb-0.5">
                            <span className="text-xl font-bold text-gray-800 md:text-2xl">{data.price} zł.</span>
                        </div>
                        <span>(Cena liczona z 23% VAT)</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                    <PackageCheck />
                    <span className="text-gray-800 font-semibold text-sm"> Dostawa od 3 do 5 dni roboczych</span>
                    </div>
                     <br /> {/* xd */}
                    <div className="flex gap-3">
                        <Button className="?">Dodaj do koszyka</Button>
                        <Button>Kup teraz</Button>
                    </div>
                    <p className="mt-7 text-base tracking-wide">{data.description}</p>
                </div>
            </div>
        </div>
    )
}