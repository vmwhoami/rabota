const login = async (page: any, email = "hello", password = "world") => {
  await page.waitForSelector('.uk-flex .uk-flex-middle .login');
  await page.click('.uk-flex .uk-flex-middle .login');

  await page.waitForSelector("#rabota_email");
  await page.click("#rabota_email")
  await page.type("#rabota_email", email);
  await page.type("#rabota_email", password);
  //   await page.waitForSelector(".sign-in-form__submit-button")
  //   await page.click(".sign-in-form__submit-button")
}

export default login;