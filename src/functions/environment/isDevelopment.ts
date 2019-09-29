import { getEnvironment } from 'src/functions/environment';

const isDevelopment = (): boolean => (
    getEnvironment() === 'development'
);

export { isDevelopment };
