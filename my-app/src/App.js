import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const LogStateChange = React.lazy(() => import("./components/LogStateChange"));
const Timer = lazy(() => import("./components/CleanupOnUnmount"));
const Counter = lazy(() => import("./components/UseReducerforComplexState"));
const CounterWithHooks = lazy(() => import("./components/CounterHooks"));
const ThemeCheck = lazy(() => import("./components/ContextAPI"));
const FetchData = lazy(() => import("./components/FetchDataOnMount"));
const MemoEx = lazy(() => import("./components/Memo"));
const Form = lazy(() => import("./components/Form"));
const FormWithValidation = lazy(() => import("./components/FormValidation"));
const UnControlledForm = lazy(() => import("./components/UnControlledForm"));
const ItemList = lazy(() => import("./components/memo&callbacks/Search"));
const ProductList = lazy(() => import("./components/memo&callbacks/ProductList"));
const PrimeNumbers = lazy(() => import("./components/memo&callbacks/PrimeNumber"));
const CacheApi = lazy(() => import("./components/memo&callbacks/CacheApi"));
const Parent = lazy(() => import("./components/memo&callbacks/ParentChildInteraction"));
const LargeList = lazy(() => import("./components/memo&callbacks/Virtualization"));
const DebouncedSearch = lazy(() => import("./components/memo&callbacks/DebouncedHooks"));
const StringTransform = lazy(() => import("./components/memo&callbacks/StringTransform"));
const DebouncedSearch1 = lazy(() => import("./components/DebounceSearch"));
const MyComponent = lazy(() => import("./components/MyComponent"));
const Home = lazy(() => import("./components/Home"));
const UserProfileWithLogger = lazy(() => import("./components/LoggingUserActWithHOC"));
const MouseTracker = lazy(() => import("./components/MousePositionTracker"));
const Modal = lazy(() => import("./components/ReactPortal"));
const MemoizedComponent = lazy(() => import('./components/React.memo'))
const DataFetcher = lazy(() => import('./components/FetchData'))

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
            <Route path="/fetchdata" element={<FetchData />} />
            <Route path="/logstate" element={<LogStateChange />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counterWithHooks" element={<CounterWithHooks />} />
            <Route path="/memo" element={<MemoEx />} />
            <Route path="/form" element={<Form />} />
            <Route path="/formValidation" element={<FormWithValidation />} />
            <Route path="/form1" element={<UnControlledForm />} />
            <Route path="/item" element={<ItemList />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/pn" element={<PrimeNumbers />} />
            <Route path="/api" element={<CacheApi />} />
            <Route path="/prt" element={<Parent />} />
            <Route path="/ll" element={<LargeList />} />
            <Route path="/dbs" element={<DebouncedSearch />} />
            <Route path="/ds" element={<DebouncedSearch1 />} />
            <Route path="/mycomp" element={<MyComponent />} />

            <Route path="/strans" element={<StringTransform />} />

            <Route path="/themeCheck" element={<ThemeCheck />} />
            <Route path="/" element={<Home />} />
            <Route path="/memoC" element={<MemoizedComponent />} />
            <Route path="/data" element={<DataFetcher />} />

            <Route path="/portal" element={<Modal  message="Hello from Portal!" onClose={() => console.log("Modal closed")} />} />

            <Route path="/logger" element={<UserProfileWithLogger name="Alice" />} />
            <Route path="/mouseTrack" element={<MouseTracker render={({ x, y }) => (<h3>Mouse Position: {x}, {y}</h3>)} />} />

          </Routes>
          </Suspense>

        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
