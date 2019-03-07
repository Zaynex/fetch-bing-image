const Koa = require("koa");
const path = require("path");
const app = new Koa();
const puppeteer = require("puppeteer");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const Router = require("koa-router");
const staticPath = "./static";
const router = new Router();
const getDate = require('./common/util').getDate;
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');

app.use(conditional());
app.use(etag());
router.get("/api/bing", async (ctx, next) => {
  if(ctx.request.headers['if-none-match'] == getDate()) {
    ctx.status = 304;
    next();
    return;
  }
  ctx.set({
      'ETag': getDate(),
  })
  const broswer = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await broswer.newPage();
  await page.goto("https://cn.bing.com/");
  const result = await page.$eval('#bgDiv', el => getComputedStyle(el).backgroundImage);
  await broswer.close();
  ctx.body = result;
});
app.use(router.routes());
app.use(bodyParser());
app.use(static(path.join(__dirname, staticPath)));
app.listen(3000);
