import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "sonner";
import { ListeningProvider } from "./context/ListeningContext.tsx";
import { ReadingProvider } from "./context/ReadingContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ListeningProvider>
      <ReadingProvider>
        <App />
        <Toaster richColors />
      </ReadingProvider>
    </ListeningProvider>
  </StrictMode>
);
