interface UnsanitizedConfig {
  [key: string]: undefined | string | number | boolean;
}
interface SanitizedConfig {
  [key: string]: string | number | boolean;
}

export const getSanitizedConfig = (config: UnsanitizedConfig) => {
  for (const [key, value] of Object.entries(config)) {
    if (typeof value === undefined) throw new Error(`${key} is not defined`);
  }
  return config as SanitizedConfig;
};
