"use strict";
// import * as path from 'path';
Object.defineProperty(exports, "__esModule", { value: true });
const sendCV_1 = require("./sendCV");
const getButtonsClick = async (page) => {
    try {
        let elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn'));
        let elements = await elementsHendles.getProperties();
        let elements_arr = await Array.from(elements.values());
        console.log(elements_arr);
        await loopFunc(elements_arr, page);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = getButtonsClick;
const loopFunc = async (elements_arr, page) => {
    while (elements_arr.length > 0) {
        let shifted = elements_arr.shift();
        await shifted.click();
        await sendCV_1.default(page);
    }
};
