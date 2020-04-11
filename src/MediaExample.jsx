import React from "react";

const doMedia = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    });
    const videoTracks = stream.getVideoTracks();
    const track = videoTracks[0];
    // alert(`Getting video from: ${track.label}`)
    const video1 = document.querySelector("#video1");
    video1.srcObject = stream;

    const video2 = document.querySelector("#video2");
    const stream2 = video1.captureStream();
    video2.srcObject = stream2;
    console.log({ stream2 });
    // const buttonElement =
    // document.querySelector('#get-access')
    // buttonElement.setAttribute('hidden', true)
    setTimeout(() => {
      video1.srcObject = null;
      video2.srcObject = null;
      track.stop();
    }, 3 * 1000);
  } catch (error) {
    alert(`${error.name}`);
    console.error(error);
  }
};

const MediaExample = () => {
  return (
    <React.Fragment>
      <button onClick={doMedia} id="get-access">
        Get access to camera
      </button>
      <br />
      <video id="video1" autoPlay />
      <video id="video2" autoPlay />
      {/* <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script> */}
    </React.Fragment>
  );
};

export default MediaExample;
