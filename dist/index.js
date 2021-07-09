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
    page.goto(url);
    login_1.default(page, email, password);
    // searchFor(page, "recruiter it");
    // selectCountry(page, "Portland").then(() => getAllBtns(page))
};
(async () => {
    await gotTo("https://www.rabota.md/ro/");
})();
