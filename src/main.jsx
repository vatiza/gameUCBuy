import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import routes from "./routes/routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <div className="font-arbo ">
          {" "}
          <RouterProvider router={routes} />
        </div>
      </NextUIProvider>
    </QueryClientProvider>
  </StrictMode>
);
