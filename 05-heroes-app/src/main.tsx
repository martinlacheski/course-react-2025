import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold">Heroes App</h1>
    <Button>Boton</Button>
  </StrictMode>
);
