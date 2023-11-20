"use client";

import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

import getBillboard from "@/hooks/getBillboard";

type Props = {};

const Billboard = (props: Props) => {
  const { data, isLoading } = getBillboard();
  const [isMuted, setIsMuted] = useState<boolean>(true);
  // h is set to that value to maintain a billboard aspect ratio of 21:9
  return (
    <div className="relative h-[42.85vw]">
      <video
        className="w-full h-[42.85vw] object-cover brightness-75"
        autoPlay
        muted={isMuted}
        loop
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <h2 className="text-white text-xl md:text-5xl h-full w-[50vw] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </h2>
        <p className="text-white text-sm md:text-lg mt-4 md:mt-8 md:w-[50vw] w-[80vw] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-4 gap-4">
          <button className="bg-white text-white bg-opacity-30 rounded-md p-2 px-3 text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            More Info
            <AiOutlineInfoCircle className="ml-2" size={20} />
          </button>
        </div>
      </div>
      <button
        className="border-2 border-white absolute bottom-16 right-16 p-2 rounded-full"
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
