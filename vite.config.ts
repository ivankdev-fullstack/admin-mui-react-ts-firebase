import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./", "");
  return {
    define: {
      "import.meta.env.API_KEY": JSON.stringify(env.API_KEY),
      "import.meta.env.AUTH_DOMAIN": JSON.stringify(env.AUTH_DOMAIN),
      "import.meta.env.PROJECT_ID": JSON.stringify(env.PROJECT_ID),
      "import.meta.env.STORAGE_BUCKET": JSON.stringify(env.STORAGE_BUCKET),
      "import.meta.env.SENDER_ID": JSON.stringify(env.SENDER_ID),
      "import.meta.env.APP_ID": JSON.stringify(env.APP_ID),
    },
    plugins: [react()],
  };
});
