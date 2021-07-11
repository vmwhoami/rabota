// import * as path from 'path';

import sendCV from "./sendCV";


const getButtonsClick = async (page: any) => {

  try {

    let elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn')!);
    let elements = await elementsHendles.getProperties();
    let elements_arr = await Array.from(elements.values());
    console.log(elements_arr);
    await loopFunc(elements_arr, page)



  } catch (error) {
    console.log(error);
  }

}

export default getButtonsClick;

const loopFunc = async (elements_arr: any, page: any) => {
  while (elements_arr.length > 0) {
    let shifted = elements_arr.shift()
    await shifted.click();
    await sendCV(page);
  }
}