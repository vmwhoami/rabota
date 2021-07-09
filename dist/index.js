"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startCloseBrowser_1 = require("./startCloseBrowser");
const login_1 = require("./login");
const dotenv = require("dotenv");
dotenv.config();
const gotTo = async (url) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const { page } = await startCloseBrowser_1.startBrowser();
    page.setViewport({ width: 1000, height: 768 });
    await page.goto(url);
    await login_1.default(page, email, password);
    await page.goto(url + 'jobs-moldova-react');
    await page.setViewport({ width: 500, height: 768 });
    try {
        await page.evaluate(() => {
            let elements = document.querySelectorAll('.cat_red_btn');
            for (const element of elements) {
                element.click();
            }
        });
    }
    catch (error) {
        console.log(error);
    }
    // selectCountry(page, "Portland").then(() => getAllBtns(page))
};
(async () => {
    await gotTo("https://www.rabota.md/ro/");
})();
