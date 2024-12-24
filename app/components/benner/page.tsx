"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Benner() {
  const images = [
    "/benn/1.jpg",
    "/benn/2.jpg",
    "/benn/3.jpg",
    "/benn/4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt="Banner Image"
        fill // Automatically fills the parent container
        style={{ objectFit: "cover" }} // Ensures the image covers the container
        priority // Ensures the image is loaded as high priority
      />
    </div>
  );
}
