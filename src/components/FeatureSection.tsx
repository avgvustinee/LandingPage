import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-500 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-sky-600 rounded-full h-6 text-md font-medium px-2 py-1 uppercase">
          Fea
          <span className="bg-gradient-to-r from-sky-600 to-sky-300 text-transparent bg-clip-text">ture</span>
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide ">
          Easily build
          <span className="bg-gradient-to-r from-sky-600 to-cyan-600 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap  mt-10 ml-20 lg:mt-20 lg:ml-40">
        {features.map((feature, index) => (
          <div key={index} className="w-1/2 sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2  bg-neutral-900 text-sky-400 justify-center items-center rounded-full">
                {feature.icon}
              </div>
            </div>
            <h5 className="mt-1 mb-6 text-xl"> {feature.text}</h5>
            <p className="text-md p-2 text-neutral-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
