import { App } from "@slack/bolt";

import Config from "./Config";

const { SIGNING_SECRET, APP_TOKEN, BOT_TOKEN, CHANNEL_NAME } = Config.Slack;

const app = new App({
  signingSecret: SIGNING_SECRET,
  socketMode: true,
  appToken: APP_TOKEN,
  token: BOT_TOKEN,
});

app.event("channel_created", async ({ event }) => {
  console.dir({ event }, { depth: null });
  try {
    const result = await app.client.chat.postMessage({
      channel: CHANNEL_NAME,
      text: `【速報】 #${event.channel} チャンネルが作られました！！🎉`,
      link_names: true,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

app.event("channel_archive", async ({ event }) => {
  try {
    const result = await app.client.chat.postMessage({
      channel: CHANNEL_NAME,
      text: `【悲報】 #${event.channel} チャンネルがアーカイブされたよ。。。`,
      link_names: true,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

app.event("channel_deleted", async ({ event }) => {
  event;
  try {
    const result = await app.client.chat.postMessage({
      channel: CHANNEL_NAME,
      text: `【悲報】 #${event.channel} チャンネルが削除されたよ。。。`,
      link_names: true,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  await app.start();
  console.log("⚡️ Bolt app is running!");
})();
