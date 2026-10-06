import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        allowedHosts: [
            'sb-10mq9ewa8gt3.vercel.run',
            'localhost'
        ]
    }
});
