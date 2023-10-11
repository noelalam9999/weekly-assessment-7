const app = require("./app");
const { port, host } = require("./config/config");


app.listen(port, () => {
  console.log(`Boom🎉, Hare is Server http://${host}:${port}`);
});
