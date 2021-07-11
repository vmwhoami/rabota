"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startCloseBrowser_1 = require("./startCloseBrowser");
const dotenv = require("dotenv");
const login_1 = require("./login");
const getButtons_1 = require("./getButtons");
dotenv.config();
const gotTo = async (url) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const { page } = await startCloseBrowser_1.startBrowser();
    page.setViewport({ width: 1000, height: 800 });
    await page.goto(url);
    await login_1.default(page, email, password);
    await page.goto(url + 'jobs-moldova-web-developer');
    await page.setViewport({ width: 500, height: 768 });
    await getButtons_1.default(page);
};
(async () => {
    await gotTo("https://www.rabota.md/ro/");
})();
