import Header from "../../components/Header/page";
import Footer from "../../components/footer/page";
import Image from 'next/image';
import Logo from "@/app/components/logo/page";
import Navbar from "@/app/components/navbar/page";
import Benner from "@/app/components/benner/page";
import Link from 'next/link';

export default function Naat() {
  return (
    <div>
      <Logo/>
      <Navbar/>
      <Benner/>

      <Header />

      {/* Naat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-200 p-4">
        {[
          {
            title: "Huzoor Ka Deewana",
            imgSrc: "/n/n11.jpg",
            link: "https://drive.google.com/file/d/1c7UaxN1Rq7sc8El6CW9rkOCH0mVLsBs9/view?usp=sharing",
          },
          {
            title: "Huzoor Ka Deewana",
            imgSrc: "/n/n11.jpg",
            link: "https://drive.google.com/file/d/1c7UaxN1Rq7sc8El6CW9rkOCH0mVLsBs9/view?usp=sharing",
          },
          {
            title: "Huzoor Ka Deewana",
            imgSrc: "/n/n11.jpg",
            link: "https://drive.google.com/file/d/1c7UaxN1Rq7sc8El6CW9rkOCH0mVLsBs9/view?usp=sharing",
          },
          {
            title: "Huzoor Ka Deewana",
            imgSrc: "/n/n11.jpg",
            link: "https://drive.google.com/file/d/1c7UaxN1Rq7sc8El6CW9rkOCH0mVLsBs9/view?usp=sharing",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="h-auto bg-white border-2 border-black p-4 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <h1 className="text-center font-bold text-xl sm:text-2xl mb-4">
              {item.title}
            </h1>
            <Link href={item.link}>
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform transform hover:scale-110"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            </Link>
            <Link
              href={item.link}
              className="mt-4 text-center text-sm sm:text-lg text-blue-600 hover:underline transition-colors hover:text-blue-800"
            >
              Click to Watch
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
