import Image from "next/image";
import introImg from "../../public/images/introbg.jpg";
import flowersImg from "../../public/images/flowers.jpg";
import redImg from "../../public/images/red.jpg";
import grassImg from "../../public/images/grass.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="h-[700px] overflow-hidden bg-white lg:mb-[50px]">
        <div className="absolute top-[200px] lg:left-[300px]">
          <h1 className="text-5xl mb-2">Don&#39;t wait!</h1>
          <p className="text-3xl">Get your new look today!</p>
        </div>
        <Image src={introImg} alt="pink" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 max-w-[1200px] m-auto mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px] lg:mt-0">
          <h2 className="mb-3 text-4xl text-center font-Playfair">
            <span className="text-black">M</span>ISSION
          </h2>
          <p className="font-Montserrat">
            Welcome to Vitalize, where style meets expertise. Step into
            a world of creativity and precision, where each style tells a
            unique story. Our passion for hair goes beyond trends&#59; it&#39;s about
            crafting personalized looks that empower you to express your true
            self. From vibrant hair coloring to precision haircuts, our skilled
            stylists are here to transform your vision into reality. Discover the
            artistry of hair design and experience the difference at Vitalize.
          </p>
        </div>
        <div className="flex flex-row lg:w-[750px] lg:h-[260px] h-[180px] overflow-hidden m-auto mb-3 lg:mb-0 lg:gap-4">
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={flowersImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={redImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={grassImg} alt="weights" />
          </div>
        </div>
      </div>
    </main>
  );
}
