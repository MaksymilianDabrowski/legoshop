import Link from "next/link";
import { client } from "../lib/sanity";
import { ArrowRightCircle } from 'lucide-react';
import Image from "next/image";
import { simpleProduct } from "../interface";

async function getData() {
  const query = `*[ _type == 'product'][0...4] | order(_createdAt desc) {
    _id, 
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
    }`;
  const data = await client.fetch(query);
  return data;
}

const Products = async () => {
  const data: simpleProduct = await getData(); // interface
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-auto py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Nasze najpopularniejsze zestawy
          </h2>
          <Link href="/" className="text-primary flex items-center gap-x-1">Zobacz wszystkie<span><ArrowRightCircle /></span></Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((products: any) => (
            <div key={products._id} className="group relative">
              <div className="aspect-auto w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80"> {/* Obróbka zdjęć */}
                <Image src={products.imageUrl} alt="Product Image" className="w-full h-full object-fill object-center lg:h-full lg:w-full" width={300} height={300} />
              </div>  {/* Zdjęcia na całej szerokości strony, obciąć widok baneru na samej górze, pozmieniać kolory */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <Link href={`/product/${products.slug}`}>
                      {products.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm text-gray-900 font-semibold">
                  {products.price} zł.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products