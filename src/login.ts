const login = async (page: any, email = "hello", password = "world") => {
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
  } catch (error) {
    console.log(error);
  }


}

export default login;