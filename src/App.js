import { RouterProvider } from "react-router-dom";
import router from "./router/Router/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
