import React from 'react'
// import ResponsiveCard from './components/ResponsiveCard';
import ErrorBoundary from './components/ErrorBoundary';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
          {/* <ResponsiveCard/> */}
          <VideoPlayer videoUrl={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;

