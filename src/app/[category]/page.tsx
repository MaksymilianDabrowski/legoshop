import { simpleProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import Link from 'next/link';


async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"] {
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name
  }`;
    const data = await client.fetch(query);
    return data;
}

export default async function CategoryPage({params}: {params: {category: string}}) {
    const data: simpleProduct[] = await getData(params.category)

    return(
        <div className="bg-white">
      <div className="mx-auto max-w-auto py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our best {params.category}
          </h2>
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