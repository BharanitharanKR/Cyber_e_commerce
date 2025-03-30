import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    process.env.VITE_BASE_PATH ||
    "Cyber_e_commerceCyber_e_commerce/Cyber_e_commerce",
});
