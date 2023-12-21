// nie da się połączyć danych płynących z "use client" oraz sanity.io
"use client"
import Slider from "react-slick"
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";

import lego1 from "./BannerPhotos/lego1.jpg";
import lego2 from "./BannerPhotos/lego2.jpg";
import lego3 from "./BannerPhotos/lego3.jpg";
import lego4 from "./BannerPhotos/lego4.jpg";
import lego5 from "./BannerPhotos/lego5.jpg";
import lego6 from "./BannerPhotos/lego6.jpg";

import BannerTxt from "./BannerTxt";


const Banner = () => {
  const Next = (props: any) => {
    const {onClick} = props;
    return (
      <div className="p-3 bg-slate-100 hover:text-red-500 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-30 fixed left-2 top-1/2"
      onClick={onClick}>
        <ChevronsLeft/>
      </div>
    )
  }
  const Prev = (props: any) => {
    const {onClick} = props;
    return (
      <div className="p-3 bg-slate-100 hover:text-red-500 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-30 absolute right-2 top-1/2" // ustawić to tak jak powinno być przy fixed
      onClick={onClick}>
        <ChevronsRight/>
      </div>
    )
  }
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false, // true
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return ( // następnie: dodać animacje do zdjęć - motion, może shadcn, !naprawić slider który przesuwa zdjęcia w drugą stronę!
    <div className="relative">
       <Slider {...settings}>
          <div className="w-full h-full relative"> 
            <Image src={lego6} alt="Banner One" className="w-[1900px] h-[865px] rounded-lg"/> {/* height - md:h-[855px] */}
            <BannerTxt title="Niesamowite zestawy klocków!"/> {/*Teksty banerów będą musiały zostać napisane w Sanity */}
          </div>
          <div className="w-full h-full relative">
            <Image src={lego2} alt="Banner Two" className="w-[1900px] h-[865px] rounded-lg"/> 
            <BannerTxt title="Niesamowite zestawy!"/>
          </div>
          <div>
            <Image src={lego3} alt="Banner Three" className="w-[1900px] h-[865px] rounded-lg"/> 
          </div>
          <div>
            <Image src={lego4} alt="Banner Four" className="w-[1900px] h-[865px] rounded-lg"/> 
          </div>
          <div>
            <Image src={lego5} alt="Banner Five" className="w-[1900px] h-[865px] rounded-lg"/> 
          </div>
          <div>
            <Image src={lego1} alt="Banner Six" className="w-[1900px] h-[865px] rounded-lg"/> 
          </div>
        </Slider>
    </div>
  )
}

export default Banner