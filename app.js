const Koa = require('koa');
const app = new Koa();
const PORT = 6669

app.use(async context => {
 context.body = 'Hello World';
});

const server = app.listen(PORT);
console.log('KOA Server is running on: ' + PORT)

function exitHandler() {
 server.close();
 process.exit(0);
}

process.on('beforeExit', exitHandler)
process.on('exit', exitHandler)
process.on('SIGTERM', exitHandler);
process.on('SIGINT', exitHandler);