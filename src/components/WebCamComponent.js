import React, { useEffect, useRef } from 'react';
import './WebCamComponent.css';

const WebcamFeed = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => {
          if (videoRef1.current && videoRef2.current) {
            videoRef1.current.srcObject = stream;
            videoRef2.current.srcObject = stream;
          }
        })
        .catch(error => {
          console.error('Error accessing webcam:', error);
        });
    }
  }, []);

  return (
    <div className="videoContainer">
      <div className="grid">
        <div className="gridItem">
          <div className="videoWrapper">
            <video ref={videoRef1} autoPlay />
          </div>
        </div>
        {/* <div className="gridItem">
          <div className="imageWrapper">
            <img src={"src/components/who_wants_to_be_a_millionaire__uk_2018_logo.png"} alt="Separator Image" />
          </div>
        </div> */}
        <div className="gridItem">
          <div className="videoWrapper">
            <video ref={videoRef2} autoPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebcamFeed;
