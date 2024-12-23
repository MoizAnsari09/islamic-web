import Image from "next/image";

export default function Benner() {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
      <Image
        src="/benn/7 (3).jpg"
        alt="Banner Image"
        fill // Automatically fills the parent container
        style={{ objectFit: "cover" }} // Replaces the legacy 'objectFit' prop
        priority // Ensures the image is loaded as high priority
      />
    </div>
  );
}
