// https://vitejs.dev/guide/env-and-mode.html#env-variables
const {
  MODE: ENVIRONMENT,
  DEV,
  PROD,
  NODE_ENV,

  VITE_REACT_STRICT_MODE: REACT_STRICT_MODE,
} = import.meta.env;

export { ENVIRONMENT, DEV, PROD, NODE_ENV, REACT_STRICT_MODE };
