"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// import delay from "./delay";
const pathFile = __dirname.split('\\').slice(0, 4).join('/');
const fileExitst = fs.existsSync(`${pathFile}/VITALIEMELNIC.pdf`);
const SendCV = async (page) => {
    let spans = await page.$$('form .tabs span');
    await spans[0].click();
    await page.waitForTimeout(1000);
    await page.waitForSelector('#full_name');
    await page.type("#full_name", "Vitalie Melnic");
    const elementHandle = await page.$("input[type=file]");
    if (fileExitst) {
        await elementHandle.uploadFile(`${pathFile}/VITALIEMELNIC.pdf`);
    }
    await page.click('#agreement-id-styler');
    await page.waitForSelector('.set_cookie_agreement');
    await page.click('.set_cookie_agreement');
    await page.waitForTimeout(1000);
    await page.click('#cv_sent .m_window .mw_close');
    // await page.evaluate(() => {
    //   let close: HTMLElement = document.querySelector('#cv_sent .m_window .mw_close')!;
    //   return close.click();
    // })
};
exports.default = SendCV;
