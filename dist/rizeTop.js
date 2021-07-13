"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ridicaTop = async (page) => {
    await page.waitForSelector('.info .btn_up');
    await page.click('.info .btn_up');
    await page.waitForSelector('#fillAccount');
    await page.click('#fillAccount');
};
exports.default = ridicaTop;
