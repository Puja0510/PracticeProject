import * as React from 'react';
import styled from 'styled-components';
import { VideoPlayerWrapper } from './skins';

const VideoPlayer = (props) => {
  const { videoUrl } = props;

  React.useEffect(() => {
  }, [videoUrl]);

  return (
    <VideoPlayerWrapper>
      <p>Video Player</p>
      <video 
        src={videoUrl} 
        controls 
        autoPlay 
        width="100%" 
        height="auto" 
        preload="auto" 
        poster="https://media1.tenor.com/m/8QDqygjn59QAAAAC/black-screen.gif" 
        // autoplay=""
        // style={{ display: videoUrl ? 'block' : 'none' }} 
      >
        Your browser does not support the video tag.
      </video>
      {!videoUrl && <p>No video available</p>}
    </VideoPlayerWrapper>
  );
};

export default VideoPlayer;
{/* <video class="sc-bRBYWo jUJMnu" id="myVideo" src="https://kreditbee-prod-static-assets.kreditbee.in/video/Deactivate%20NACH%20Mandate_Portrait_40secs.mp4" preload="auto" poster="https://media1.tenor.com/m/8QDqygjn59QAAAAC/black-screen.gif" autoplay="" data-cy="in-app-video" disablepictureinpicture=""></video> */}
