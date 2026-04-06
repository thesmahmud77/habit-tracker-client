import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import FallBack from "./Components/FallBack.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<FallBack></FallBack>}>
        <RouterProvider router={router} />
      </Suspense>
      ,
    </AuthProvider>
  </StrictMode>,
);
