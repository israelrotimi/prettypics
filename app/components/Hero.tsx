"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [hoverSelect, setHoverSelect] = useState(false)
  return (
    <div className="w-full h-[60vh] bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage: "url(bg.jpg)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken"
    }}>
        <nav className="flex space-between p-4">
            <h3 className="font-bold italic font-sans text-white text-2xl">PrettyPics</h3>
            <div className="flex flex-1 justify-end">
                <ul className="hidden md:flex space-x-4 list-none">
                <li className="p-3 hover:bg-[rgba(0, 0, 0, 0.8)]"><a href="" className="p-3 text-white ">Explore</a></li>
                </ul>
                <button className="bg-white p-3 m-2 rounded-lg">
                    <span className="text-[#191919]">Join</span>
                </button>
            </div>
        </nav>
        <header className="mx-auto mt-20 flex items-center justify-center">
            <div className="flex flex-col items-center w-[90%] lg:w-[50%] gap-16">
                <h1 className="text-4xl text-white font-sans font-bold">
                    PrettyPics, your go-to destination for stunning and high-quality images.
                </h1>
                <div className="w-[80%] flex px-3 rounded-md bg-white text-black">
                    <button className="">images</button>
                    <input 
                    className="w-full h-14 p-2"
                    type="text" placeholder="Search for free photos" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className="flex items-center justify-center p-3">
                        <FaSearch className="text-[#676767]"/>
                    </button>
                </div>
                {hoverSelect && (
                    <div>
                        <p>photos</p>
                        <p>videos</p>
                    </div>
                )}
            </div>
        </header>
    </div>
  )
}

export default Hero