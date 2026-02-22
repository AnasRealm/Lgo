import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.learning-go.cloud/docs-json',
  output: {
    path: 'lib/api/generated',
    postProcess: ['prettier'],
  },
  plugins: [
    '@hey-api/typescript',
    '@hey-api/sdk',
    {
      name: '@hey-api/client-next',
      runtimeConfigPath: '../client',
    },
    'zod',
  ],
});
