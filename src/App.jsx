import "./App.css";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/Common/ErrorBoundry";
import Loader from "./components/Common/Loader/Loader";
import { ROUTES } from "./constants/routes";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./components/Common/NotFound/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
