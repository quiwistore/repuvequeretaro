import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://repuvequeretaro.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
