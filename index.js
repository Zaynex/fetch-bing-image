const Koa = require('koa');
const app = new Koa();
const puppeteer = require('puppeteer');

app.use(async ctx => {
    const broswer = await puppeteer.launch();
    const page = await broswer.newPage();
    await page.goto('https://cn.bing.com/');
    const imageSource = await page.evaluate(() => {
        const IMAGE_SOURCE_TAG = '#bgDiv';
        const image = document.querySelector(IMAGE_SOURCE_TAG);
        const imageSourceWithURL = image.style.backgroundImage;
        const imageSource = imageSourceWithURL.slice(5, -2);
        return {
            imageSource
        }
    })
    // await page.screenshot({path: 'demo.png'});
    await broswer.close();
    ctx.response.body = imageSource
});
app.listen(3000);