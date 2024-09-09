import antiVirusImg from "../../img/virus-navy.png";
import bacteriaImg from "../../img/bacteria-navy.png";
import bgimg from "../../img/slide4.png";
import roundImg from "../../img/round2.png";

export default function Banner1() {
  return (
    <div className=" w-full md:flex  sm:pl-10 relative text-[#66bc89] overflow-hidden bg-[#ffd500]">
      <div className=" w-full pb-10  md:w-1/2 py-20 md:py-24 lg:py-36 cursor-default ">
        <p className=" w-full px-5 sm:px-0 text-center md:text-start text-4xl lg:text-6xl font-semibold">
          Get rid of bacteria in your home
        </p>
        <p className=" w-full text-center md:text-start text-lg md:text-2xl mt-4">
          Get rid of all bacteria!
        </p>
        <div className=" flex items-center justify-center md:justify-start gap-5 mt-5">
          <div className=" flex items-center gap-1">
            <img src={bacteriaImg} className=" w-6" alt="" />
            <p className=" text-xs">Anti-Bacteria</p>
          </div>
          <div className=" flex items-center gap-1">
            <img src={antiVirusImg} className=" w-6" alt="" />
            <p className=" text-xs">Anti-Virus</p>
          </div>
        </div>
        <div className=" flex items-center justify-center md:justify-start">
          <button className="  mt-5 font-semibold bg-white py-[7px] px-8 rounded-full duration-200 text-lg hover:text-white hover:bg-[#66bc89]">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" md:w-1/2 w-full relative  ">
        <img
          src={bgimg}
          className=" w-full object-cover h-96 sm:h-full"
          alt=""
        />
        <div className=" rounded-full size-24 sm:size-32 bg-[#66bc89] flex items-center justify-center absolute -top-[10%] md:top-[50%] right-[20%] text-white">
          <p className=" text-2xl sm:text-4xl font-bold">-25%</p>
        </div>
        <div className=" absolute w-full h-full  top-0 left-0 flex items-center justify-center  ">
          <img src={roundImg} className=" h-[110%]  object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}
