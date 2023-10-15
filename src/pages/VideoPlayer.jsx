import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

function VideoPlayer() {
  const { isVideoLink } = useContext(AppContext);

  console.log(isVideoLink);

  return (
    <div>
      <h1>Video</h1>
      <p>link: {isVideoLink}</p>

      <iframe
        className="videoPlayer"
        src={isVideoLink}
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