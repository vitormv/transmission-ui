import { getEnvironment } from 'src/functions/environment';

const isProduction = (): boolean => (
    getEnvironment() === 'production'
);

export { isProduction };
