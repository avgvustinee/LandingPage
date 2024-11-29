import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your {""}
        <span className="bg-gradient-to-r from-sky-600 to-cyan-700 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className=" p-2  w-full lg:w-1/2 ">
          <img
            src={codeImg}
            alt="code"
            className="w-100  h-80 lg:h-[500px] rounded-md mt-10 border border-sky-800 shadow-cyan-800 "
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((checklistItem, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{checklistItem.title}</h5>
                <p className=" text-md text-neutral-400">{checklistItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
