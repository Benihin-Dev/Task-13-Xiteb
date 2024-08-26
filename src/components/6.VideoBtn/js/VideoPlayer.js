import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function VideoPlayer({ setVideoPlayerState }) {
  return (
    <div className=" fixed w-screen h-screen z-20 bg-[#070707c1] top-0 left-0">
      <div className=" w-full h-full relative flex items-center justify-center">
        <div
          onClick={() => {
            setVideoPlayerState(false);
          }}
          className=" z-30 absolute top-12 gap-1 sm:top-16 flex items-center  cursor-pointer right-4 p-2 text-gray-400 hover:text-red-500    "
        >
          <RxCross2 className="size-5 " />
          <p className=" text-lg leading-3 font-montserrat">Close</p>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/pxlxaTmeGSU?autoplay=1&loop=1&playlist=pxlxaTmeGSU&modestbranding=1&controls=1&showinfo=0&mute=0&start=0"
            title="YouTube video"
            className=" h-screen w-screen "
            frameBorder="0"
            allow="autoplay; loop; muted"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
