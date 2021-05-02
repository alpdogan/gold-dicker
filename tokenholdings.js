const puppeteer = require('puppeteer');

var token = process.argv.slice(2);
console.log("fetching tokenholdings", token);

const hodlFetcher = async (token) => {
    try {
            const browser = await puppeteer.launch();
            const [page] = await browser.pages();
        
            var tokenHoldingsUrl = `https://bscscan.com/tokenholdings?a=${token}&ps=25&sort=quantity&order=desc`;
            console.log(tokenHoldingsUrl);
        
            await page.goto(tokenHoldingsUrl, { waitUntil: 'networkidle0' });
            const data = await page.evaluate(() => {
                var all = document.querySelector('*');
                console.log("-------------", all);
                // return all
                var result = [];
                var index = 0;
                all.querySelector("#tb1").querySelectorAll("td").forEach((td, i) => {
                            if(i % 8 > 0){
                                result[index].push(td.outerText);
                            }else{
                                index++;
                                result[index] = [];
                            }
                });
                console.log(result);
                return result;
            });
        
            var result = data.map((item) => {
                if(item instanceof Array){
                    return {
                        tokenName: item[0],
                        symbol: item[1],
                        quantity: item[2],
                        tokenPrice: item[3],
                        valueInBNB: item[5],
                        valueInUSD: item[6]
                    }
                }
            }).filter((p) => typeof p !== 'undefined');
            // console.log(result);
        
            await browser.close();
            return result;

          } catch (err) {
            console.error(err);
          }
}

module.exports = hodlFetcher;

// (async function main() {
//   try {
//     const browser = await puppeteer.launch();
//     const [page] = await browser.pages();

//     var tokenHoldingsUrl = `https://bscscan.com/tokenholdings?a=${token}&ps=25&sort=quantity&order=desc`;


//     await page.goto(tokenHoldingsUrl, { waitUntil: 'networkidle0' });
//     const data = await page.evaluate(() => {
//         var all = document.querySelector('*');
//         console.log("-------------", all);
//         // return all
//         var result = [];
//         var index = 0;
//         all.querySelector("#tb1").querySelectorAll("td").forEach((td, i) => {
//                     if(i % 8 > 0){
//                         result[index].push(td.outerText);
//                     }else{
//                         index++;
//                         result[index] = [];
//                     }
//         });
//         console.log(result);
//         return result;
//     });

//     var result = data.map((item) => {
//         if(item instanceof Array){
//             return {
//                 tokenName: item[0],
//                 symbol: item[1],
//                 quantity: item[2],
//                 tokenPrice: item[3],
//                 valueInBNB: item[5],
//                 valueInUSD: item[6]
//             }
//         }
//     }).filter((p) => typeof p !== 'undefined');
//     console.log(result);

//     await browser.close();
//   } catch (err) {
//     console.error(err);
//   }
// })();