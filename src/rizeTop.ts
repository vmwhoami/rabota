const ridicaTop = async(page:any):Promise<void>=>{
  await page.waitForSelector('.info .btn_up');
  await page.click('.info .btn_up');
  await page.waitForSelector('#fillAccount');
  await page.click('#fillAccount');
  await page.waitForSelector('#doUpStep2  .wClose');
  await page.click('#doUpStep2  .wClose');
}

export default ridicaTop;