import Link from "next/link"

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





export default function Footer() {
    return (
        <div className="bg-gray-600 py-6 flex flex-col items-center space-y-4 sm:space-y-6">
            <div className="flex space-x-3 sm:space-x-5">
                <Link href="#"><FaFacebookSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" /></Link>
                <Link href="#"><FaSquareInstagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" /></Link>
                <Link href="#"><FaTwitterSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" /></Link>
                <Link href="#"><FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" /></Link>
            </div>
            <p className={`text-center text-white text-sm sm:text-base font-medium`}>
                Copyrights © 2020 - 2024 islamicresearch.com . All Rights Reserved.
            </p>
        </div>
    );
}







