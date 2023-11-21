import botHandler from "./telegram/index.js";
import { onRequest } from "firebase-functions/v2/https";

export const telegram = onRequest(
  {
    timeoutSeconds: 1200,
    concurrency: 1000,
    region: ["asia-southeast1"],
    cors: true,
  },
  botHandler
);
