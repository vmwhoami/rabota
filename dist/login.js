"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = async (page, email = "hello", password = "world") => {
    try {
        await page.waitForSelector('#locLogin');
        await page.click('#locLogin');
        await page.type("#locLogin", email);
        await page.waitForSelector("#locPassword");
        await page.type("#locPassword", password);
        await page.waitForSelector('#locRemember');
        await page.click('#locRemember');
        await page.waitForSelector('#button_l');
        await page.click('#button_l');
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = login;
