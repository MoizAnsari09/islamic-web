import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/components/logo/page";
import Navbar from "@/app/components/navbar/page";
import Benner from "@/app/components/benner/page";
import Header from "@/app/components/Header/page";
export default function Contant() {
    return (
        <div>
        <Logo/>
        <Navbar/>
        <Benner/>
        <Header/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Hamd Section */}
                <div className="bg-white border-2 border-black flex flex-col items-center p-3 w-full transition-transform transform hover:scale-105">
                    <h1 className="text-center font-bold text-lg md:text-xl">Hamd</h1>
                    <Link href="/Media/Hamd">
                        <div className="mt-3 mb-3 w-full cursor-pointer overflow-hidden">
                            <Image
                                src="/h/h1.jpg"
                                alt="Picture of the author"
                                className="rounded-lg transition-transform transform hover:scale-110"
                                width={1000} 
                                height={1000} 
                            />
                        </div>
                    </Link>
                    <Link 
                        href="/Media/Hamd" 
                        className="no-underline text-md md:text-lg text-black text-center transition-colors hover:text-blue-500"
                    >
                        Click to Watch
                    </Link>
                </div>

                {/* Naat Section */}
                <div className="bg-white border-2 border-black flex flex-col items-center p-3 w-full transition-transform transform hover:scale-105">
                    <h1 className="text-center font-bold text-lg md:text-xl">Naat</h1>
                    <Link href="/Media/Naat">
                        <div className="mt-3 mb-3 w-full cursor-pointer overflow-hidden">
                            <Image
                                src="/n/n11.jpg"
                                alt="Picture of the author"
                                className="rounded-lg transition-transform transform hover:scale-110"
                                width={1000} 
                                height={1000} 
                            />
                        </div>
                    </Link>
                    <Link 
                        href="/Media/Naat" 
                        className="no-underline text-md md:text-lg text-black text-center transition-colors hover:text-blue-500"
                    >
                        Click to Watch
                    </Link>
                </div>
                
                {/* Kalaam Section */}
                <div className="bg-white border-2 border-black flex flex-col items-center p-3 w-full transition-transform transform hover:scale-105">
                    <h1 className="text-center font-bold text-lg md:text-xl">Kalaam</h1>
                    <Link href="/Media/Kalaam">
                        <div className="mt-3 mb-3 w-full cursor-pointer overflow-hidden">
                            <Image
                                src="/k/k3.jpg"
                                alt="Picture of the author"
                                className="rounded-lg transition-transform transform hover:scale-110"
                                width={1000} 
                                height={1000} 
                            />
                        </div>
                    </Link>
                    <Link 
                        href="/Media/Kalaam" 
                        className="no-underline text-md md:text-lg text-black text-center transition-colors hover:text-blue-500"
                    >
                        Click to Watch
                    </Link>
                </div>
            </div>
        </div>
    );
}
