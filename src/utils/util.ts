export const objectHasKeys = (obj: { [key: string]: any }) => {
  return Object.keys(obj).length > 0;
};

export const getErrorMessage = (error: unknown, fallback?: string): string => {
  if (error instanceof Error) {
    return error.message;
  }

  return fallback ?? String(error);
};
