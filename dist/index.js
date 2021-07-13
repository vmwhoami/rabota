"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' });
const startCloseBrowser_1 = require("./startCloseBrowser");
const login_1 = require("./login");
const applyToJobs_1 = require("./applyToJobs");
const gotToAndDo = async (url, search, rizeTop = false) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const { page } = await startCloseBrowser_1.startBrowser();
    page.setViewport({ width: 1000, height: 800 });
    await page.goto(url);
    await login_1.default(page, email, password);
    if (rizeTop)
        await page.goto(url + search);
    await page.setViewport({ width: 500, height: 1000 });
    await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
    await applyToJobs_1.default(page);
};
const url = "https://www.rabota.md/ro/";
const searchCat = 'jobs-moldova-junior-developer';
const rizeTop = true;
(async () => {
    await gotToAndDo(url, searchCat);
})();
