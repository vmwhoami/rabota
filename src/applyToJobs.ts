import sendCV from "./sendCV";

const loopFunc = async (elements_arr: any, page: any) => {
  while (elements_arr.length > 0) {
    let popped = elements_arr.pop()
    await popped.click();
    await sendCV(page);
  }
}

const applyToJobs = async (page: any) => {
  try {
    let elementsHendles = await page.evaluateHandle(() => document.querySelectorAll('.cat_red_btn')!);
    let elements = await elementsHendles.getProperties();
    let children: any = [];
    for (const property of elements.values()) {
      const element = property.asElement();
      if (element)
        children.push(element);
    }
    await loopFunc(children, page)
  } catch (error) {
    console.log(error);
  }

}

export default applyToJobs;

