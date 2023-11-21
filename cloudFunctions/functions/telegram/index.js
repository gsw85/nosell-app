import logger from "firebase-functions/logger";
import { Telegraf, session } from "telegraf";
import {
  catchError,
  start,
  actions,
  mileage,
} from "./handler/standard-command.js";
import messageHandler from "./handler/message.js";
import { startScene, createScene, handleScene } from "./scene/index.js";

const bot = new Telegraf(process.env.TELEGRAM_KATETAYBOT, {
  telegram: { webhookReply: true },
});
bot.use(session());
//
const scenes = startScene();
const stage = createScene(Object.values(scenes));
bot.use(stage.middleware());
//
bot.catch(catchError);
bot.start(start);
bot.command("mileage", (ctx) => mileage(ctx, bot));
//
actions(bot);
handleScene(scenes);

bot.on("message", messageHandler);

export default async function botHandler(req, res) {
  logger.log("Incoming Message ", req.body);
  await bot.handleUpdate(req.body, res);
}
