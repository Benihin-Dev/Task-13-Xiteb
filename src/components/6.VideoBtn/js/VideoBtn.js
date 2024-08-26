import React, { useState } from "react";
import bgImg from "../img/fx_video.jpg";
import { FaPlay } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";

export default function VideoBtn() {
  const [videoPlayerState, setVideoPlayerState] = useState(false);

  return (
    <div className=" w-full py-10 relative bg-[#f1fbff]">
      <div className=" w-full h-[250px] sm:h-[500px] overflow-hidden relative">
        <img src={bgImg} className=" w-full h-full object-cover" alt="" />
        <div className=" absolute top-0 left-0 w-full flex items-center justify-center h-full">
          <div className="">
            <div
              onClick={() => {
                setVideoPlayerState(true);
              }}
              className="md:p-7 p-5  border cursor-pointer  text-black hover:text-[#c41f3a] duration-200 bg-white rounded-full relative"
            >
              <FaPlay className=" size-6 relative z-10" />
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      {videoPlayerState && (
        <VideoPlayer setVideoPlayerState={setVideoPlayerState} />
      )}
    </div>
  );
}
