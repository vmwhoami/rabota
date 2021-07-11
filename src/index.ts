import { startBrowser } from './startCloseBrowser';
import * as dotenv from 'dotenv';
import login from './login';
import applyToJobs from "./applyToJobs";

dotenv.config();
const gotTo = async (url: string) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const { page } = await startBrowser();
  page.setViewport({ width: 1000, height: 800 });
  await page.goto(url);
  await login(page, email, password);
  await page.goto(url + 'jobs-moldova-junior-developer');
  await page.setViewport({ width: 500, height: 1000 });
  await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  await applyToJobs(page)

}


(async () => {
  await gotTo("https://www.rabota.md/ro/");
})();