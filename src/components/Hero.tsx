import Image from "next/image";
import HeroImage from "public/Hero-Image.png";

export default function Hero() {
  return (
    <div className="relative w-full overflow-visible">
      <div className="flex justify-center items-center w-full">
        <div className="max-w-[min(100%,1200px)] relative">
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={1150}
            height={600}
            className="border-b-2 border-gray-800 object-contain"
          />

          <div className="absolute bottom-0 left-0 right-0 h-[100%] bg-gradient-to-r from-[rgba(24,28,37,1)] from-2% via-transparent via-65% to-[rgba(24,28,37,1)] to-100%" />

          <div className="absolute -bottom-8 left-10 h-16 w-16 md:left-20 md:-bottom-10 md:h-24 md:w-24 lg:-bottom-18 lg:left-40 lg:h-32 lg:w-32 z-50">
            <Image
              src={"/Me.png"}
              alt="My pic"
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}