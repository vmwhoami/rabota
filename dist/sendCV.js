"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// import delay from "./delay";
const pathFile = __dirname.split('\\').slice(0, 4).join('/');
const fileExists = fs.existsSync(`${pathFile}/VITALIEMELNIC.pdf`);
const uploadCV = async (fileExists, elementHandle) => {
    if (fileExists) {
        await elementHandle.uploadFile(`${pathFile}/VITALIEMELNIC.docx`);
    }
};
const SendCV = async (page) => {
    await page.waitForTimeout(500);
    let spans = await page.$$('form .tabs span');
    await spans[0].click();
    await page.waitForTimeout(500);
    await page.waitForSelector('#full_name');
    await page.type("#full_name", "Vitalie Melnic");
    const elementHandle = await page.$("input[type=file]");
    await uploadCV(fileExists, elementHandle);
    await page.click('#agreement-id-styler');
    await page.waitForSelector('.set_cookie_agreement');
    await page.waitForTimeout(500);
    await page.click('.set_cookie_agreement');
    await page.waitForTimeout(1500);
    await page.click('#cv_sent .m_window .mw_close');
};
exports.default = SendCV;
