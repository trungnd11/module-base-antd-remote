import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const Home = lazy(() => import("@pages/Home"));

const App = () => {
  return (
    <Suspense>
      <h1>Hello!!</h1>
      <h2>Welcome to your First React App...!</h2>
      <Home />
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
