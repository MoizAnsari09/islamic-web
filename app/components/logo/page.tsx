import Image from "next/image"


export default function Logo() {
    return (
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
    );
}
