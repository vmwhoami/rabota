// import * as path from 'path';
import * as fs from 'fs';
const pathFile = __dirname.split('\\').slice(0, 4).join('/');
const fileExitst = fs.existsSync(`${pathFile}/VITALIEMELNIC.pdf`);

const getButtonsClick = async (page: any) => {

  // let div = document.querySelector('.tabs')!;
  // let child = div.firstElementChild

  try {
    await page.evaluate(async () => {
      let element: any = await document.querySelector('.cat_red_btn')!;
      element.click()
    });

    let input = await page.waitForSelector('#full_name');
    if (!input) {
      await page.waitForSelector('form .tabs span:not(.active)');
      await page.click('form .tabs span:not(.active)');
    }
    await page.type("#full_name", "Vitalie Melnic");
    const elementHandle = await page.$("input[type=file]");
    if (fileExitst) {
      await elementHandle.uploadFile(`${pathFile}/VITALIEMELNIC.pdf`)
    }
    await page.click('#agreement-id-styler');
    await page.waitForSelector('.set_cookie_agreement');
    await page.click('.set_cookie_agreement');


  } catch (error) {
    console.log(error);

  }

}



export default getButtonsClick;