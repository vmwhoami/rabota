"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendCV_1 = require("./sendCV");
const loopFunc = async (elements_arr, page) => {
    while (elements_arr.length > 0) {
        const selectedElement = elements_arr.shift();
        await selectedElement.click();
        await (0, sendCV_1.default)(page);
    }
};
const applyToJobs = async (page) => {
    try {
        const elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn'));
        const elements = await elementsHendles.getProperties();
        const children = [];
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
exports.default = applyToJobs;
