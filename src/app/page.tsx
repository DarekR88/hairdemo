import Image from "next/image";
import introImg from "../../public/images/introbg.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="h-[700px] overflow-hidden bg-white">
        <div className="absolute top-[200px] lg:left-[300px]">
          <h1 className="text-5xl mb-2">Don't wait!</h1>
          <p className="text-3xl">Get your new look today!</p>
        </div>
        <Image src={introImg} alt="pink" />
      </div>
    </main>
  );
}
