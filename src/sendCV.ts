import * as fs from 'fs';
const pathFile = __dirname.split('\\').slice(0, 4).join('/');
const fileExitst = fs.existsSync(`${pathFile}/VITALIEMELNIC.pdf`);
import delay from "./delay";

const SendCV = async (page: any) => {
  let input = await page.waitForSelector('#full_name');
  if (!input) {
    await page.waitForSelector('form .tabs span:not(.active)');
    await page.click('form .tabs span:not(.active)');
  }
  await page.waitForSelector('#full_name');
  await page.type("#full_name", "Vitalie Melnic");
  const elementHandle = await page.$("input[type=file]");
  if (fileExitst) {
    await elementHandle.uploadFile(`${pathFile}/VITALIEMELNIC.pdf`)
  }
  await page.click('#agreement-id-styler');
  await page.waitForSelector('.set_cookie_agreement');
  await page.click('.set_cookie_agreement');
  await delay(2000);
  await page.evaluate(() => {
    let close: HTMLElement = document.querySelector('#cv_sent .m_window .mw_close')!
    return close.click()
  })
}

export default SendCV;