import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ListeningProvider } from "./context/ListeningContext.tsx";
import { ReadingProvider } from "./context/ReadingContext.tsx";
import { WritingProvider } from "./context/WritingContext.tsx";
import { SpeakingProvider } from "./context/SpeakingContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "sonner";
import { TestProvider } from "./context/TestContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <TestProvider>
        <ListeningProvider>
          <ReadingProvider>
            <WritingProvider>
              <ReadingProvider>
                <SpeakingProvider>
                  <App />
                  <Toaster richColors />
                </SpeakingProvider>
              </ReadingProvider>
            </WritingProvider>
          </ReadingProvider>
        </ListeningProvider>
      </TestProvider>
    </AuthProvider>
  </StrictMode>
);
