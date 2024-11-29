import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual Reality build tools
        <span className="bg-gradient-to-r from-sky-500 to-cyan-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className=" mt-10  text-lg text-center text-neutral-200 max-w-4xl">
        Build immersive experiences with our cutting-edge VR tools, designed to
        streamline development, boost efficiency, and unlock your creativity.
        From intuitive interfaces to powerful features, our tools empower
        developers to bring their visions to life with ease. Whether you're
        creating gaming adventures, educational simulations, or virtual training
        platforms, our VR solutions provide the flexibility and performance
        needed to innovate and inspire.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-cyan-600 to-sky-700 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-800 shadow-cyan-800 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-800 shadow-cyan-800 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
