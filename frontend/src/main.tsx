import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/lib/queryClient";

import { AuthProvider } from "@/context/AuthContext";

import AppRouter from "@/app/router";

import { Toaster } from "sonner";

import "./index.css";
import { BrowserRouter } from "react-router";
import { UIProvider } from "./context/UIContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UIProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </UIProvider>

        <Toaster position="top-right" richColors closeButton />
      </AuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
