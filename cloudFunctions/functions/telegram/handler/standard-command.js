import logger from "firebase-functions/logger";
import { sceneID } from "../scene/constant.js";
import { getLatestMileAge } from "../functions.js";

export async function start(ctx) {
  return ctx.reply("Hi I am robot, nice to see you");
}

export async function mileage(ctx, bot) {
  let chatID = ctx.message.from.id + "";
  if (
    chatID === process.env.TELEGRAM_KATETAY_CHATID + "" ||
    chatID === process.env.TELEGRAM_GSW_CHATID + ""
  ) {
    try {
      const { status, data } = await getLatestMileAge();

      if (!status) return ctx.reply(data);

      await bot.telegram.sendMessage(
        chatID,
        `Welcome this is your latest mileage and actions ${data.mileage}`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Add Litre", callback_data: sceneID.addLitre },
                { text: "Minus KMs", callback_data: sceneID.minusLitre },
              ],
            ],
          },
        }
      );
    } catch (err) {
      ctx.reply(`Error: ${err.message}`);
    }
  } else {
    ctx.reply(":)");
  }
}

export function actions(bot) {
  bot.action("addLitre", (ctx) => {
    ctx.reply("please let me know how many litre you want to add (0.01-100)");
    ctx.scene.enter(sceneID.addLitre);
  });
  bot.action("minusLitre", (ctx) => {
    ctx.reply(
      "please let me know how many KM you want to minus (minimum of 0)"
    );
    ctx.scene.enter(sceneID.minusLitre);
  });
}

export async function catchError(err, ctx) {
  logger.error("[Bot] Error", err);
  return ctx.reply(`ops, bot encountered an error for ${ctx.updateType}`, err);
}
