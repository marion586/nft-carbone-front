/// <reference types="vitest" />
import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        server: {
            port: 3000,
        },
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        build: {
            commonjsOptions: {
                esmExternals: true,
            },
        },
        // @ts-ignore
        test: {
            environment: 'happy-dom',
            global: true,
        },
    });
};
