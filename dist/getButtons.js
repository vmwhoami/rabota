"use strict";
// import * as path from 'path';
Object.defineProperty(exports, "__esModule", { value: true });
// import delay from "./delay";
const sendCV_1 = require("./sendCV");
const getButtonsClick = async (page) => {
    try {
        let elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn'));
        let elements = await elementsHendles.getProperties();
        // let elements_arr = await Array.from(elements.values());
        let children = [];
        for (const property of elements.values()) {
            const element = property.asElement();
            if (element)
                children.push(element);
        }
        await loopFunc(children, page);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = getButtonsClick;
const loopFunc = async (elements_arr, page) => {
    while (elements_arr.length > 0) {
        let popped = elements_arr.pop();
        await popped.click();
        await sendCV_1.default(page);
    }
};
