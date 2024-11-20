import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      future={{v7_startTransition: true}}
      router={router}
    />
  </StrictMode>
);
