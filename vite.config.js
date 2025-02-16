import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/stits-app-react/", // Set this to match your GitHub Pages repo name
});
