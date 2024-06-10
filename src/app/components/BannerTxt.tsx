interface Props {
  title: string;
}

const BannerTxt = ({ title }: Props) => {
  return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <h2 className="text-7xl text-white">{title}</h2>
    </div>
  )
}

export default BannerTxt