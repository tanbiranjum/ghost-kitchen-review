import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import router from "./router/Router/router";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
