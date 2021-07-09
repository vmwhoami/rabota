import { startBrowser } from './startCloseBrowser';
import login from './login';
import * as dotenv from 'dotenv';

dotenv.config();
const gotTo = async (url: string) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const { page } = await startBrowser();
  page.setViewport({ width: 1000, height: 768 });
  page.goto(url);
  login(page, email, password);
  // searchFor(page, "recruiter it");
  // selectCountry(page, "Portland").then(() => getAllBtns(page))


}


(async () => {
  await gotTo("https://www.rabota.md/ro/");
})();