import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import routes from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <div className="font-arbo ">
        {" "}
        <RouterProvider router={routes} />
      </div>
    </NextUIProvider>
  </StrictMode>
);
