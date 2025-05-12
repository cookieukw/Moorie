import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
  imagePoster: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, imagePoster }) => {
  return (
    <div className="video-wrapper"
    
    >
      <ReactPlayer
        url={videoUrl}
        light={imagePoster}
        controls
        width="100%"
        
        playing={false}
      />
    </div>
  );
};

export default VideoPlayer;
