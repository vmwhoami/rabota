"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getButtonsClick = async (page) => {
    try {
        await page.evaluate(async () => {
            let element = document.querySelector('.cat_red_btn');
            element.click();
            const [span] = await page.$x("//div[@class='tabs']/span[contains(., 'Ataseaza')]");
            console.log(span);
            if (span) {
                await span.click();
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = getButtonsClick;
