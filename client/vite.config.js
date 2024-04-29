import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "bespoke-flan-5f1fea.netlify.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
