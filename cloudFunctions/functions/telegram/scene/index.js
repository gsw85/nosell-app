import { Scenes } from "telegraf";
import { sceneID } from "./constant.js";
import { addMileAgeDoc, minusMileAgeDoc } from "../functions.js";

export function startScene() {
  const startAddLitre = new Scenes.BaseScene(sceneID.addLitre);
  const startMinusLitre = new Scenes.BaseScene(sceneID.minusLitre);
  return { startAddLitre, startMinusLitre };
}

export function createScene(sceneArr = []) {
  return new Scenes.Stage(sceneArr);
}

export function handleScene(scenes = {}) {
  const { startAddLitre, startMinusLitre } = scenes;

  startAddLitre.on("text", async (ctx) => {
    // ctx.deleteMessage();
    const message = ctx.message.text;
    if (!+message || +message < 0 || +message > 100) {
      ctx.reply(
        "You must only enter number from 0.01 to 100, please start over again with /mileage"
      );
    } else {
      const { data } = await addMileAgeDoc(+message);
      ctx.reply(data);
    }
    await ctx.scene.leave();
  });

  startMinusLitre.on("text", async (ctx) => {
    // ctx.deleteMessage();
    const message = ctx.message.text;
    if (+message >= 0) {
      const { data } = await minusMileAgeDoc(+message);
      ctx.reply(data);
    } else {
      ctx.reply(
        "You must only enter number that is equal or more than 0, please start over again with /mileage"
      );
    }
    await ctx.scene.leave();
  });
}
