import Header from "../../components/Header/page";
import Footer from "../../components/footer/page";

import Image from 'next/image';
import Navbar from '../../components/navbar/page';

import Link from 'next/link';

export default function Hamd() {
  return (
    <div>
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center h-[200px] sm:h-[300px] w-full bg-cover">
        <Image
          src="/main 2.png"
          alt="Logo Image"
          className=" w-[200px] sm:w-[300px] lg:w-[400px] object-contain"
          width={1000} // Optional; use if you want automatic layout
          height={200} // Optional; use if you want automatic layout
          priority
        />
      </div>

      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] w-full bg-cover">
        <Image
          src="/benn/7 (6).jpg"
          alt="Banner Image"
          fill // Automatically fills the parent container
          style={{ objectFit: "cover" }} // Replaces the legacy 'objectFit' prop
          priority // Ensures the image is loaded as high priority
        />
      </div>

      <Header />

      {/* Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-200 p-4">
        {[
         
         
          {
            title: "Chalo Palestine",
            imgSrc: "/k/k3.jpg",
            link: "https://drive.google.com/file/d/1HjuZtDCYu--q0IOvJY9ASdlDM4NuddxC/view?usp=sharing",
          },
          {
            title: "Chalo Palestine",
            imgSrc: "/k/k3.jpg",
            link: "https://drive.google.com/file/d/1HjuZtDCYu--q0IOvJY9ASdlDM4NuddxC/view?usp=sharing",
          },
          {
            title: "Chalo Palestine",
            imgSrc: "/k/k3.jpg",
            link: "https://drive.google.com/file/d/1HjuZtDCYu--q0IOvJY9ASdlDM4NuddxC/view?usp=sharing",
          },
          {
            title: "Chalo Palestine",
            imgSrc: "/k/k3.jpg",
            link: "https://drive.google.com/file/d/1HjuZtDCYu--q0IOvJY9ASdlDM4NuddxC/view?usp=sharing",
          },
          
        ].map((item, index) => (
          <div
            key={index}
            className="h-auto bg-white border-2 border-black p-4 flex flex-col items-center"
          >
            <h1 className="text-center font-bold text-xl sm:text-2xl mb-4">
              {item.title}
            </h1>
            <Link href={item.link}>
              <div className="w-full h-[200px] sm:h-[300px]">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-contain"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            </Link>
            <Link
              href={item.link}
              className="mt-4 text-center text-sm sm:text-lg text-blue-600 hover:underline"
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
