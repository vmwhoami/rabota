// import * as path from 'path';

// import delay from "./delay";
import sendCV from "./sendCV";


const getButtonsClick = async (page: any) => {

  try {

    let elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn')!);
    let elements = await elementsHendles.getProperties();
    // let elements_arr = await Array.from(elements.values());
    let children: any = [];

    for (const property of elements.values()) {
      const element = property.asElement();
      if (element)
        children.push(element);
    }
    console.log(children);

    await loopFunc(children, page)

  } catch (error) {
    console.log(error);
  }

}

export default getButtonsClick;

const loopFunc = async (elements_arr: any, page: any) => {
  while (elements_arr.length > 0) {
    let popped = elements_arr.pop()
    await popped.click();
    await sendCV(page);
  }
}