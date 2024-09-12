import React, { useEffect } from "react";

const VideoBackground = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/Zv11L-ZfrSg?si=Yg7bMxwkpHoeaDZ_&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
