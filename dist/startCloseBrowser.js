"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeBrowser = exports.startBrowser = void 0;
const puppeteer_1 = require("./puppeteer");
const startBrowser = async () => {
    const browser = await puppeteer_1.default.launch({
        headless: false, slowMo: 30, devtools: false
    });
    const page = await browser.newPage();
    return { browser, page };
};
exports.startBrowser = startBrowser;
const closeBrowser = async (browser) => {
    return browser.close();
};
exports.closeBrowser = closeBrowser;
