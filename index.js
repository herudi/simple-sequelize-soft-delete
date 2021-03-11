const App = require("./App");

const app = new App();

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log('> Running on 3000');
});