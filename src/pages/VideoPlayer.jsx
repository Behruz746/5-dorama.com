import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

function VideoPlayer() {
  const { isVideoLink } = useContext(AppContext);
  return (
    <div>
      <iframe
        className="videoPlayer"
        src={localStorage.getItem('dataLink')} // video link form locakStorage.getItem('data');
        width="846px"
        height="476px"
        frameBorder="0"
        allowFullScreen
        allow="autoplay *; fullscreen *"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
