import ResponsiveCard from './components/ResponsiveCard';
import ErrorBoundary from './components/ErrorBoundary';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
          <ResponsiveCard/>
          <VideoPlayer/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
