import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-visible">
      <div className="flex justify-center items-center w-full">
        <div className="max-w-[min(100%,1200px)] relative">
          <Image
            src={"/Hero-Image.png"}
            alt="Hero Image"
            width={1150}
            height={600}
            className="saturate-50 border-b-2 border-white"
          />

          <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#151d24] to-transparent z-10" />

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