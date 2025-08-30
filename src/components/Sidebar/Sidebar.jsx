import React from "react";
import logoWhite from "../../assets/logoWhite.png";
import Languages from "./Languages";
import Favourites from "./Favourites";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMenu, MdRadio, MdTune } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";
import { useDispatch } from "react-redux";
import Playlists from "./Playlists";
import { setProgress } from "@/redux/features/loadingBarSlice";

const Sidebar = ({ showNav, setShowNav }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        showNav ? "" : "translate-x-[-100%]"
      } transition-all duration-200  h-screen lg:w-[300px] md:w-[250px] w-[65vw] fixed top-0 left-0 z-40 bg-lavender-950 flex flex-col justify-between`}
    >
      <div>
        <div className=" flex mt-3">
          <MdOutlineMenu
            onClick={() => setShowNav(false)}
            className=" mx-4 text-2xl lg:text-3xl my-auto text-white cursor-pointer"
          />
          <div className=" flex justify-center items-center">
            <Link href="/">
              <Image
                onClick={() => {
                  dispatch(setProgress(100));
                }}
                src={logoWhite}
                alt="logo"
                className="lg:py-2 w-[139px] h-auto lg:w-[190px] lg:h-auto object-contain"
              />
            </Link>
          </div>
        </div>
        <div className=" mt-7 pb-7 border-b border-gray-400 w-[95%]">
          <Profile setShowNav={setShowNav} />
        </div>
        <div className="flex flex-col gap-1">
          <Languages />
          <hr className="border-gray-400 w-[95%] mx-auto" />
        </div>
        
        {/* Radio Section */}
        <div className="pt-5 m-2 rounded-md w-[95%] hover:bg-white/5">
          <div className="text-white">
            <details className="text-white detailanimatation">
              <summary className="flex gap-3 hover:underline justify-between items-center px-3 w-full border-white mx-3 cursor-pointer mb-2">
                <div className="flex items-center gap-3">
                  <MdTune className="text-xl text-lavender-400" />
                  <span className="font-semibold">Radio</span>
                </div>
              </summary>
              <div className="flex flex-col max-h-60 overflow-y-scroll overflow-x-hidden">
                <a
                  href="https://shonowave.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 hover:underline justify-between items-center px-3 w-full border-white mx-3 cursor-pointer mb-2 text-sm text-gray-300 hover:text-lavender-400 transition-colors duration-300"
                >
                  <span>ShonoWave Radio</span>
                  <span className="text-xs text-lavender-400">→</span>
                </a>
              </div>
            </details>
          </div>
        </div>
        
        <hr className="border-gray-400 w-[95%] mx-auto" />
        
        <Favourites setShowNav={setShowNav} />
        <div className="flex flex-col gap-1">
          <hr className="border-gray-400 w-[95%] mx-auto" />
          <Playlists setShowNav={setShowNav} />
          <hr className="border-gray-400 w-[95%] mx-auto" />
        </div>
      </div>
      <div className=" mb-28 text-gray-200 mx-3 flex gap-3">
        <Link href="/dmca">
          <p className="hover:border border-gray-200 p-1 font-medium w-fit rounded cursor-pointer text-sm">
            DMCA
          </p>
        </Link>
        <Link href="/about">
          <p className="hover:border border-gray-200 p-1 font-medium w-fit rounded cursor-pointer text-sm">
            About
          </p>
        </Link>
        <a
          href="https://github.com/Mahatir-Ahmed-Tusher/Gaanly"
          target="_blank"
          rel="noreferrer"
        >
          <p className=" hover:border border-gray-200 p-1 font-medium w-fit rounded cursor-pointer text-sm flex items-center gap-1">
            <FaGithub />
            Github
          </p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
