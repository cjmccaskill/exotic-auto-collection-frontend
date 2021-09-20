import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        style={{ position: "absolute", top: 0, left: 0 }}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=r9AQ7_jc7-w"
      />
    </div>
  );
}
