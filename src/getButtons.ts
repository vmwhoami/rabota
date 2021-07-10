const getButtonsClick = async (page: any) => {


  try {
    await page.evaluate(async () => {
      let element: any = document.querySelector('.cat_red_btn')!;
      element.click()
      const [span] = await page.$x("//div[@class='tabs']/span[contains(., 'Ataseaza')]")
      console.log(span);

      if (span) {
        await span.click();
      }
    });
  } catch (error) {
    console.log(error);

  }

}



export default getButtonsClick;