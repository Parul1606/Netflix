import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = () => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">Parul Pandey</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex mt-4 space-x-2">
        <button className="flex items-center space-x-1 px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-opacity-85">
          <CiPlay1 />
          <span>Play</span>
        </button>
        <button className="flex items-center space-x-1 px-6 py-2 bg-gray-400 text-black rounded-lg hover:bg-opacity-85">
          <CiCircleInfo />
          <span>Watch more...</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
