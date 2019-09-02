
const puppeteer = require('puppeteer');


(async(user) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = ('https://twitter.com/kaiorei003');
    await page.goto(url);
    

    const twitter_name = await page.evaluate(
        () => document.querySelector("b.u-linkComplex-target").textContent

    )

    const twitter_bio = await page.evaluate(
        () => document.querySelector(".ProfileHeaderCard-bio").textContent
        
    );
    
    console.log(twitter_name);
    console.log(twitter_bio);
    
    await browser.close();
})();






