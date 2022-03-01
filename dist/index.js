"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' });
const startCloseBrowser_1 = require("./startCloseBrowser");
const login_1 = require("./login");
const applyToJobs_1 = require("./applyToJobs");
const rizeTop_1 = require("./rizeTop");
const gotToAndDo = async (url, search, rizeTop) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const { page } = await (0, startCloseBrowser_1.startBrowser)();
    page.setViewport({ width: 1000, height: 800 });
    await page.goto(url);
    await (0, login_1.default)(page, email, password);
    if (rizeTop) {
        await (0, rizeTop_1.default)(page);
    }
    await page.goto(url + search);
    await page.setViewport({ width: 500, height: 1000 });
    await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
    await (0, applyToJobs_1.default)(page);
};
const url = "https://www.rabota.md/ro/";
const searchCat = 'jobs-moldova-developer';
const rizeTop = true;
(async () => {
    await gotToAndDo(url, searchCat, rizeTop);
})();
