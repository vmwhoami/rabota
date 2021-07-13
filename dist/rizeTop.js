"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ridicaTop = async (page) => {
    await page.waitForSelector('.info .btn_up');
    await page.click('.info .btn_up');
    await page.waitForSelector('#fillAccount');
    await page.click('#fillAccount');
    await page.waitForSelector('#doUpStep2  .wClose');
    await page.click('#doUpStep2  .wClose');
};
exports.default = ridicaTop;
