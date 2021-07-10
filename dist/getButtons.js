"use strict";
// import * as path from 'path';
Object.defineProperty(exports, "__esModule", { value: true });
const sendCV_1 = require("./sendCV");
const getButtonsClick = async (page) => {
    try {
        let elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn'));
        let elements = await elementsHendles.getProperties();
        let elements_arr = Array.from(elements.values());
        let el = elements_arr.pop();
        await el.click();
        // await page.evaluate(async () => {
        //   let element: any = await document.querySelector('.cat_red_btn')!;
        //   element.click()
        // });
        await sendCV_1.default(page);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = getButtonsClick;
