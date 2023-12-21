import Link from "next/link";
import { client } from "../lib/sanity";
import { ArrowRightCircle } from 'lucide-react';
import Image from "next/image";

interface Props { // xd
  _id: string,
  imageUrl: string,
  price: number,
  slug: string,
  categoryName: string,
  name: string,
}

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
  const data: Props[] = await getData(); // interface
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Nasze najnowsze produkty
          </h2>

          <Link href="/" className="text-primary flex items-center gap-x-1">Zobasz wszystkie<span><ArrowRightCircle/></span></Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((products) => (
            <div key={products._id} className="group relative">
               <div className="aspect-auto w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80"> {/* Obróbka zdjęć */}
              <Image src={products.imageUrl} alt="Product Image" className="w-full h-full object-cover object-center" width={300} height={300}/>
              </div>  {/* Zdjęcia na całej szerokości strony, obciąć widok baneru na samej górze, pozmieniać kolory */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${products.slug}`}>
                      {products.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {products.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${products.price}
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