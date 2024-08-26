import React from "react";

export default function VideoBg() {
  return (
    <div className=" absolute -z-10 top-0 sm:-top-[60%] md:-top-20 left-0 right-0  h-screen">
      <div className=" relative w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/pxlxaTmeGSU?autoplay=1&loop=1&playlist=pxlxaTmeGSU&modestbranding=1&controls=0&showinfo=0&mute=1&start=0"
          title="YouTube video"
          className="absolute top-0 left-0 w-full h-full sm:h-[260vh] md:h-[150vh]"
          frameBorder="0"
          allow="autoplay; loop; muted"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
