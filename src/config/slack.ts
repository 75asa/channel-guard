import { getSanitizedConfig } from "./validator";

const config = {
  SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET,
  BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
  APP_TOKEN: process.env.SLACK_APP_TOKEN,
  CHANNEL_NAME: process.env.CHANNEL_NAME,
} as const;

const sanitizedConfig = getSanitizedConfig(config);
