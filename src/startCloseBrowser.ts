import puppeteer from './puppeteer';

const startBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false, slowMo: 30, devtools: false
  });
  const page = await browser.newPage();
  return { browser, page };
}
const closeBrowser = async (browser: any) => {
  return browser.close();
}

export { startBrowser, closeBrowser }