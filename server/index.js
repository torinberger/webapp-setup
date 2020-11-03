const Koa = require('koa');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(helmet());
app.use(logger());
app.use(bodyParser());

app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(4000);
