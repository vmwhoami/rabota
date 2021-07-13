/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({path: '.env'})
import { startBrowser } from './startCloseBrowser';
import login from './login';
// import applyToJobs from "./applyToJobs";
import risetoTop from './rizeTop';

const gotToAndDo = async (url: string,search:string,rizeTop:boolean =false) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const { page } = await startBrowser();
  page.setViewport({ width: 1000, height: 800 });
  await page.goto(url);
  await login(page, email, password);
  if(rizeTop){
    risetoTop(page)
  }
  console.log(search);
  
  // await page.goto(url + search);
  // await page.setViewport({ width: 500, height: 1000 });
  // await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
  // await applyToJobs(page)

}

const url = "https://www.rabota.md/ro/";
const searchCat = 'jobs-moldova-junior-developer';
const rizeTop =true;

(async () => {
  await gotToAndDo(url,searchCat,rizeTop);
})();