import React, { useEffect, useState, useRef, useCallback } from "react";
import { ImageWithoutLazy } from 'kbui/Common/Image'; // Import for custom image component
import { getImageIcon } from 'kbcommon/jsUtils'; // Utility to get icon images
import { injectIntl } from "react-intl"; // Internationalization HOC
import { configGetVal } from "kbintegration/config/helper"; // Helper to fetch config values
import {
    // Styled components for various UI elements
    VideoWrapper,
    VideoContainer,
    Video,
    HeaderContainer,
    HeaderText,
    SubHeaderText,
    ExitControlsContainer,
    ControlsContainer,
    SmallButton,
    ProgressBarContainer,
    TimeDisplay,
    TimeDisplayContainer,
    PlayPauseButton,
    VideoContentWrapper,
    ProgressThumb,
    ProgressThumbHolder,
    ProgressFilHolder,
    ProgressFillLeft,
    ProgressFillRight,
    ProgressBarCon,
    ProgressBarContainerShadow,
    BufferLoaderWrapper,
    TimeHolder
} from "./skins";
import Loader from 'kbui/Components/Common/Loader'; // Import for the loading spinner
import { appType } from "kbcommon/PureUtils"; // App utilities
import { IOS_APP_TYPE } from "kbcommon/utils"; // Constants for identifying app types

interface Props {
    videoUrl: string;  // URL of the video
    onExit: any;       // Callback for exiting the video player
    title: string;     // Title of the video
    subtitle: string;  // Subtitle or description of the video
}

const InAppVideoPlayer: React.FC<Props> = (props) => {
  const { videoUrl, onExit, title, subtitle } = props;

  // State variables
  const [isPlaying, setIsPlaying] = useState(true);  // Tracks if video is playing
  const [progress, setProgress] = useState(0);  // Tracks current video progress
  const [volume, setVolume] = useState(1);  // Tracks current volume level
  const [duration, setDuration] = useState(0); // Stores total duration of the video
  const [controlsVisible, setControlsVisible] = useState(true); // Controls visibility of UI elements
  const [isButtonVisible, setIsButtonVisible] = useState(false);  // Tracks visibility of play/pause button
  const [isInteracting, setIsInteracting] = useState(false); // Tracks if user is interacting with the player
  const [isDragging, setIsDragging] = useState(false); // Tracks if user is dragging the progress bar
  const [hasError, setHasError] = useState(false); // Tracks if there's a video error
  const [hideControls, setHideControls] = useState(false); // Hides controls initially, shown when video loads

  // Refs for video element and timeouts
  const videoElementRef = useRef(null); 
  const isDraggingRef = useRef<any>(null);
  const isInteractingRef = useRef<any>(null);
  const hideControlsTimeout = useRef<any>(null);

  // Visibility timeout (default and fetched from Firebase config)
  let visibilityTimeout = 3000; 

  try {
    // Fetch visibility timeout from Firebase configuration
    const { visibilityTimeout: firebaseVisibilityTimeout } = configGetVal('inAppVideo');
    visibilityTimeout = parseInt(firebaseVisibilityTimeout);
  } catch (e) {
    console.error("Error getting Firebase config", e);
  }

  // Close Picture-in-Picture mode before creating a new video instance (mainly for iOS support)
  const closePIPBeforeNewInstance = () => {
    try {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture(); // Exit PIP mode if active
      }
    } catch (e) {
      console.error("Error toggling Picture-in-Picture", e);
    }
  }

  // useEffect to set up the video player when the component is mounted
  useEffect(() => {
    try {
      // Preserve previous back button handler and override it with onExit handler
      window.handleHardBackBtnOld = window.handleHardBackBtn;
      window.handleHardBackBtn = onExit;

      // Set refs for interaction states to avoid stale closures
      isDraggingRef.current = isDragging;
      isInteractingRef.current = isInteracting;

      // Disable PIP and start video playback
      videoElementRef?.current?.disablePictureInPicture = true;
      closePIPBeforeNewInstance();
      videoElementRef?.current?.play();
    } catch (e) {
      console.error("Error playing video", e);
    }

    return () => {
      // Restore previous back button handler on unmount
      window.handleHardBackBtn = window.handleHardBackBtnOld;
    }
  }, []);

  // URL for the cross icon
  const crossIcon = "https://ik.imagekit.io/kreditbee/app-static/icons/V/ic-CloseInsideCircle_24A_MC-Icon2.svg";

  // Toggles play/pause state of the video
  const togglePlayPause = () => {
    const videoPlayer = videoElementRef.current;
    if (videoPlayer) {
      if (videoPlayer.paused) {
        videoPlayer.play();
        setIsPlaying(true);
      } else {
        videoPlayer.pause();
        setIsPlaying(false);
      }
      // Clear any existing control visibility timeouts
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current);
      }
      // Show play/pause button for a certain duration after user action
      setIsButtonVisible(true);
      hideControlsTimeout.current = setTimeout(() => {
        !isDraggingRef.current && !isInteractingRef.current && setIsButtonVisible(false);
      }, visibilityTimeout);
    }
  };

  // Toggle mute/unmute state of the video
  const toggleMuteUnmute = (event: React.KeyboardEvent<HTMLElement>) => {
    event?.stopPropagation?.(); // Prevent event propagation
    const videoPlayer = videoElementRef.current;
    if (videoPlayer) {
      showControls(event); // Show controls on interaction
      videoPlayer.muted = !videoPlayer.muted;
      setVolume(videoPlayer.muted ? 0 : videoPlayer.volume);
    }
  };

  // Handles progress bar changes (when user drags the progress bar)
  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const videoPlayer = videoElementRef.current;
    if (videoPlayer) {
      const value = parseFloat(event.target.value);
      // Set video current time based on progress bar percentage
      const time = (value / 100) * duration;
      videoPlayer.currentTime = time;
      setProgress(time);
    }
  };

  // Handle start of progress bar drag
  const handleDragStart = () => {
    setIsDragging(true);
    isDraggingRef.current = true;
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
    setControlsVisible(true); // Keep controls visible during drag
  };

  // Handle end of progress bar drag
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    isDraggingRef.current = false;
    setIsInteracting(false);
    isInteractingRef.current = false;
    hideControlsTimeout.current = setTimeout(() => {
      if (!isInteractingRef.current) {
        setControlsVisible(false); // Hide controls after drag ends
        setIsButtonVisible(false);
      }
    }, visibilityTimeout);
  }, [isInteracting, isDragging]);

  // Format time in mm:ss format for display
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Adds event listeners for the video player on mount
  useEffect(() => {
    const videoPlayer = videoElementRef.current;

    if (videoPlayer) {
      try {
        // Update progress as video plays
        const updateProgress = () => {
          setProgress(videoPlayer.currentTime);
        };

        // Set duration once video metadata is loaded
        const handleLoadedMetadata = () => {
          setDuration(videoPlayer.duration);
        };

        // Handle video end event
        const handleEnded = () => {
          setIsPlaying(false);
          onExit(); // Trigger onExit when video ends
        };

        // Handle video errors
        const handleError = () => {
          setHasError(true);
        };

        // Event listeners specific to iOS fullscreen behavior
        videoPlayer.addEventListener('webkitbeginfullscreen', () => {
          try {
            videoPlayer.play(); // Play video in fullscreen mode
          } catch (error) {
            console.error("Error playing video in fullscreen:", error);
          }
        });

        videoPlayer.addEventListener('webkitendfullscreen', () => {
          try {
            videoPlayer.pause();
            setIsPlaying(false);
            onExit(); // Exit fullscreen and trigger onExit
          } catch (error) {
            console.error("Error exiting fullscreen:", error);
          }
        });

        // Add event listeners for progress and metadata
        videoPlayer.addEventListener("timeupdate", updateProgress);
        videoPlayer.addEventListener("loadedmetadata", handleLoadedMetadata);
        videoPlayer.addEventListener("ended", handleEnded);
        videoPlayer.addEventListener("error", handleError);
        window.addEventListener("keydown", handleKeyDown); // Add keyboard event listener

        // Cleanup event listeners on unmount
        return () => {
          videoPlayer.removeEventListener("timeupdate", updateProgress);
          videoPlayer.removeEventListener("loadedmetadata", handleLoadedMetadata);
          videoPlayer.removeEventListener("ended", handleEnded);
          videoPlayer.removeEventListener("error", handleError);
          window.removeEventListener("keydown", handleKeyDown);
        };
      } catch (error) {
        console.error("Error initializing video:", error);
      }
    }
  }, [onExit]);

  // Handle fullscreen toggle (support for iOS)
  const handleFullscreen = () => {
    const videoPlayer = videoElementRef.current;
    if (videoPlayer && videoPlayer.webkitSupportsFullscreen) {
      videoPlayer.webkitEnterFullscreen();
    }
  };

  return (
    // Main wrapper for the video player
    <VideoWrapper>
      {/* Buffer loader shown while video is loading */}
      {hasError && <div>Error loading video</div>}
      {!hasError && (
        <VideoContentWrapper>
          {/* Video element */}
          <Video
            ref={videoElementRef}
            onClick={togglePlayPause}
            src={videoUrl}
            playsInline
          />

          {/* Controls for video */}
          {controlsVisible && (
            <ControlsContainer>
              {/* Play/Pause button */}
              <PlayPauseButton onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
              </PlayPauseButton>

              {/* Progress bar */}
              <ProgressBarContainer>
                <ProgressBarCon>
                  <ProgressFillLeft style={{ width: `${progress}%` }} />
                </ProgressBarCon>
              </ProgressBarContainer>

              {/* Time display */}
              <TimeHolder>
                <TimeDisplay>{formatTime(progress)}</TimeDisplay>
                <TimeDisplay>{formatTime(duration)}</TimeDisplay>
              </TimeHolder>

              {/* Exit button */}
              <SmallButton onClick={onExit}>
                <ImageWithoutLazy src={crossIcon} />
              </SmallButton>
            </ControlsContainer>
          )}
        </VideoContentWrapper>
      )}
    </VideoWrapper>
  );
};

export default injectIntl(InAppVideoPlayer);
