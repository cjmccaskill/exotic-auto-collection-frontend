import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
  return (
    <ReactPlayer
      playing={true}
      loop={true}
      muted={true}
      width="100%"
      height="670px"
      url="https://www.youtube.com/watch?v=r9AQ7_jc7-w"
    />
  );
}
