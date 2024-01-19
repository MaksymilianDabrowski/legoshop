"use client";

import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface Props {
  images: any,
}


const ProductGallery = ({ images }: Props) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const changeInspectedImage = (image: any) => {
    setBigImage(image);
  }
  return (

    <div className="grid gap-4 lg:grid-cols-5">
      <div className="w-full h-full gap-8 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => ( // jednak działa 
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              height={200}
              width={200}
              alt="photo"
              className="h-full w-full cursor-pointer"
              onClick={() => changeInspectedImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="MainPhoto"
          width={500}
          height={500}
          className="h-full w-full"
        />
      </div>
    </div>
  )
}

export default ProductGallery