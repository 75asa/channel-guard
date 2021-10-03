import dotenv from "dotenv";

const config = dotenv.config().parsed;

if (config) {
  for (const key in config) {
    process.env[key] = config[key];
  }
}

interface RawObject {
  [key: string]: undefined | string | number | boolean;
}

interface SanitizedObject {
  [key: string]: string | number | boolean;
}

const getSanitizedConfig = <T extends RawObject>(config: T) => {
  for (const [key, value] of Object.entries(config)) {
    if (typeof value === undefined) throw new Error(`${key} is not defined`);
  }
  return config as SanitizedObject;
};

namespace Config {
  export namespace Slack {
    export const SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET!;
    export const BOT_TOKEN = process.env.SLACK_BOT_TOKEN!;
    export const APP_TOKEN = process.env.SLACK_APP_TOKEN!;
    export const CHANNEL_NAME = process.env.SLACK_CHANNEL_NAME!;
  }
}

// TODO: undefined 外したい
// getSanitizedConfig(Config.Slack);
// Config.Slack as SanitizedObject;

export default Config;
