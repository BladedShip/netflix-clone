"use client";

import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";

import getBillboard from "@/hooks/getBillboard";
import Link from "next/link";

type Props = {};

const Billboard = (props: Props) => {
  const { data, isLoading } = getBillboard();
  const [isMuted, setIsMuted] = useState<boolean>(true);
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // Removed because netflix doesn't really do this

  // const videoRef = useRef<HTMLVideoElement>(null);
  // h is set to that value to maintain a billboard aspect ratio of 21:9
  return (
    <div className="relative lg:h-[42.85vw] h-[42.85vh]">
      <video
        className="w-full lg:h-[42.85vw] h-[42.85vh] object-cover brightness-75"
        autoPlay
        muted={isMuted}
        loop
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        // ref={videoRef}
        // onClick={(e) => {
        //   e.preventDefault();
        //   if (isPlaying) {
        //     videoRef.current?.pause();
        //     setIsPlaying(false);
        //   } else {
        //     videoRef.current?.play();
        //     setIsPlaying(true);
        //   }
        // }}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <h2 className="text-white text-xl md:text-5xl h-full w-[50vw] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </h2>
        <p className="text-white text-sm md:text-lg mt-4 md:mt-8 md:w-[50vw] w-[80vw] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-4 gap-4">
          <Link
            href={`/movie/${data?.slug}`}
            className="bg-white text-black rounded-md p-2 px-3 text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition cursor-pointer"
          >
            <BsFillPlayFill className="mr-2" size={26} />
            Play
          </Link>
          <button className="bg-white text-white bg-opacity-30 rounded-md p-2 px-3 text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <AiOutlineInfoCircle className="mr-2" size={20} />
            More Info
          </button>
        </div>
      </div>
      <button
        className="border-2 border-white absolute lg:bottom-16 lg:right-16  bottom-4 right-4 p-2 rounded-full"
        onClick={(e) => {
          e.preventDefault();
          setIsMuted(!isMuted);
        }}
      >
        {isMuted ? (
          <FiVolumeX className="text-white" size={24} />
        ) : (
          <FiVolume2 className="text-white" size={24} />
        )}
      </button>
    </div>
  );
};

export default Billboard;
