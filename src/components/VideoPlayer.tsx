import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  videoUrl: string;
  imagePoster: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, imagePoster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any | null>(null);
  console.log(videoUrl);
  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: "auto",
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [videoUrl]);

  return (
    <video
      className="video-js"
      poster={imagePoster}
      ref={videoRef}
      controls
      preload="auto"
      data-setup="{}"
    >
      <source src={videoUrl} type="video/mp4" />
      <p className="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
  );
};

export default VideoPlayer;
