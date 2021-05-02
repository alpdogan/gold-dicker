const puppeteer = require('puppeteer');

const txFetcher = async (tx) => {
    try {
            const browser = await puppeteer.launch();
            const [page] = await browser.pages();
        
            var txUrl = `https://bscscan.com/tx/${tx}`;

            await page.goto(txUrl, { waitUntil: 'networkidle0' });
            const result = await page.evaluate(() => {
                try{
                    var from = document.querySelector("#addressCopy").innerText;
                    return from;
                }catch(ex){
                    return "";
                }

            });
        
            await browser.close();
            return result;

          } catch (err) {
            console.error(err);
          }
}

module.exports = txFetcher;