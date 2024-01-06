import { client } from "@/app/lib/sanity"
import ProductGallery from "@/app/components/ProductGallery";
import { fullProduct } from "@/app/interface";


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
    const data: fullProduct = await getData(params.slug); // jest ok
    return (
        <div className="bg-white max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
                 <ProductGallery images={data}/> {/* data.images */}
            </div>
        </div>
    )
}