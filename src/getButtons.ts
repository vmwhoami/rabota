// import * as path from 'path';

import sendCV from "./sendCV";


const getButtonsClick = async (page: any) => {

  try {

    let elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn')!);
    let elements = await elementsHendles.getProperties();
    let elements_arr = Array.from(elements.values());
    let el: any = elements_arr.pop();
    await el.click();
    // await page.evaluate(async () => {
    //   let element: any = await document.querySelector('.cat_red_btn')!;
    //   element.click()
    // });

    await sendCV(page)


  } catch (error) {
    console.log(error);
  }

}

export default getButtonsClick;