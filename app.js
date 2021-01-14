const express = require("express");
const bodyparser = require("body-parser");
const Date = require(__dirname + "/date.js");

const app = express();

const items = ["buy food", "Cook food", "eat food"];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {

    const day = Date.getDay();

    res.render("list", { KindOfDay: day, newListitems: items });

});

app.post('/', (req, res) => {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});