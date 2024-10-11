const isDevelopment = process.env.NODE_ENV === 'development';

export const AppEnv = isDevelopment
  ? require('./config.development').config
  : require('./config.production').config;