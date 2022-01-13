import express from "express";
import { getFlag, initLaunchDarkly } from "./lib/launchDarkly.mjs";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let flag = await getFlag();
  res.json({ flagValue: flag });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  initLaunchDarkly();
});
