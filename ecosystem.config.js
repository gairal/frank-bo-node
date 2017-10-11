module.exports = {
  apps: [
    {
      name: 'frank-gairal-bo',
      script: './index.js',
      env: {
        COMMON_VARIABLE: 'true',
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    }
  ],
};
