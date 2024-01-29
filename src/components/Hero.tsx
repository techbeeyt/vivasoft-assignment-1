import heroImg1 from "../assets/image.svg";

const Hero = () => {
  return (
    <div
      className={`bg-gradient-to-br from-sky-200 to-pink-100 mt-6 flex justify-between items-center pt-2 pb-6`}
    >
      <div
        className={`relative flex flex-col justify-start items-start w-auto pl-16 bg-grad transition-all duration-150 ease-in`}
      >
        <div className="bg-transparent text-9xl font-bold text-indigo-600 drop-shadow-xl">
          DESIGN <span className="text-white -ml-8">.</span>
        </div>
        <div className="bg-transparent text-7xl font-bold text-white drop-shadow-md">
          BUILD <span className="text-pink-500 -ml-4">.</span>
        </div>
        <div className="bg-transparent text-8xl font-bold text-pink-500 drop-shadow-md">
          SHINE <span className="text-indigo-600 -ml-6  animate-ping">.</span>
        </div>
      </div>

      <div className="w-1/2 flex justify-end items-center">
        <img src={heroImg1} className="w-[90%]" />
      </div>
    </div>
  );
};

export default Hero;
