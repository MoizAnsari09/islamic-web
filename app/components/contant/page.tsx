import Link from "next/link";
import Image from "next/image";

export default function Contant() {
    return (
        <div className="flex justify-center items-center bg-gray-200 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Hamd Section */}
                <div className="bg-white border-2 border-black flex flex-col items-center p-3 w-full">
                    <h1 className="text-center font-bold text-lg md:text-xl">Hamd</h1>
                    <Link href="/Media/Hamd">
                        <div className="mt-3 mb-3 w-full cursor-pointer">
                            <Image
                                src="/h/h1.jpg"
                                alt="Picture of the author"
                                className="rounded-lg"
                                width={1000} 
                                height={1000} 
                            />
                        </div>
                    </Link>
                    <Link 
                        href="/Media/Hamd" 
                        className="no-underline text-md md:text-lg text-black text-center"
                    >
                        Click to Watch
                    </Link>
                </div>

                {/* Naat Section */}
                <div className="bg-white border-2 border-black flex flex-col items-center p-3 w-full">
                    <h1 className="text-center font-bold text-lg md:text-xl">Naat</h1>
                    <Link href="/Media/Naat">
                        <div className="mt-3 mb-3 w-full cursor-pointer">
                            <Image
                                src="/n/n11.jpg"
                                alt="Picture of the author"
                                className="rounded-lg"
                                width={1000} 
                                height={1000} 
                            />
                        </div>
                    </Link>
                    <Link 
                        href="/Media/Naat" 
                        className="no-underline text-md md:text-lg text-black text-center"
                    >
                        Click to Watch
                    </Link>
                </div>
                {/* Kalaam section */}
                <div className="bg-white border-2 border-black flex flex-col items-center p-3 w-full">
                    <h1 className="text-center font-bold text-lg md:text-xl">Naat</h1>
                    <Link href="/Media/Kalaam">
                        <div className="mt-3 mb-3 w-full cursor-pointer">
                            <Image
                                src="/k/k3.jpg"
                                alt="Picture of the author"
                                className="rounded-lg"
                                width={1000} 
                                height={1000} 
                            />
                        </div>
                    </Link>
                    <Link 
                        href="/Media/Kalaam" 
                        className="no-underline text-md md:text-lg text-black text-center"
                    >
                        Click to Watch
                    </Link>
                </div>
            </div>
        </div>
    );
}
