// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/Web_Portfolio/', // Cambia esto por el nombre de tu repo
});