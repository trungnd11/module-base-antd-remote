import ErrorBoundary from "@components/errorBoundary/ErrorBoundary";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const Home = lazy(() => import("@pages/Home"));

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <h1>Hello!!</h1>
        <h2>Welcome to your First React App...!</h2>
        <Home />
      </Suspense>
    </ErrorBoundary>
  );
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
