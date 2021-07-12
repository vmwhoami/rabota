import * as fs from 'fs';
import * as path from 'path';
const pathFileMac = __dirname.split('\\').slice(0, 4).join('/');//for Mac
const pathFileWin = path.resolve('dist','cvs','VITALIEMELNIC.docx');
const fileExistsMac = fs.existsSync(`${pathFileMac}/VITALIEMELNIC.pdf`);
const fileExistsWin = fs.existsSync(pathFileWin);

type uploadCV=(a:boolean,b:boolean,c:any)=>void;

const uploadCV = async (fileExistsMac: boolean,fileExistsWin:boolean, elementHandle: any) => {
  if (fileExistsMac ) {
    await elementHandle.uploadFile(`${pathFileMac}/VITALIEMELNIC.pdf`);
  }else if(fileExistsWin){
    await elementHandle.uploadFile(`${pathFileWin}`);
  }
};

const SendCV = async (page: any) => {
  await page.waitForTimeout(500);
  const spans: any = await page.$$('form .tabs span');
  await spans[0].click();
  await page.waitForTimeout(500);
  await page.waitForSelector('#full_name');
  await page.type('#full_name', 'Vitalie Melnic');
  const elementHandle = await page.$('input[type=file]');
  uploadCV(fileExistsMac,fileExistsWin,elementHandle)
  await page.click('#agreement-id-styler');
  await page.waitForSelector('.set_cookie_agreement');
  await page.waitForTimeout(500);
  await page.click('.set_cookie_agreement');
  await page.waitForTimeout(1500);
  await page.click('#cv_sent .m_window .mw_close');
};

export default SendCV;