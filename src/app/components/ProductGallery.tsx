import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface Props {
    images: any,
}


const ProductGallery = ({images}: Props) => {
    // const [bigImage, setImage] = useState(images[0]);
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => ( // nie działa 
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              height={200}
              width={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
      </div>
  )
}

export default ProductGallery