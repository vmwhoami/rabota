const ridicaTop = async(page:any):Promise<void>=>{
  await page.waitForSelector('.info .btn_up');
  await page.click('.info .btn_up');
  await page.waitForSelector('#fillAccount');
  await page.click('#fillAccount');
}

export default ridicaTop;