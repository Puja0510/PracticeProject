import * as React from 'react';
import styled from 'styled-components';

export interface videoPlayerProps {
/**
* Content for title of state message.
*/
title?: string;
/**
* Content for subtitle of state message.
*/
subTitle?: string;
/**
* Content for videoUrl.
*/
videoUrl?: string;
}


const videoPlayerWrapper = styled.div`
  border: 2px solid black;
  height: 5rem;
  width: 5rem;
`;


const VideoPlayer = (props) => {

    return(
        <videoPlayerWrapper>video player</videoPlayerWrapper>
    )
}

export default VideoPlayer;