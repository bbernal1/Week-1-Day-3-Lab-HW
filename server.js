let express = require("express");
let app = express();
const port = 3600;
const { application } = require("express");
const bodyParser = require("body-parser")
const magicRoute = require("./routes/magic-route.js");
const beerRoute = require("./routes/beer-route.js");
app.use(bodyParser.json());
app.use("/magic", magicRoute);
app.use("/beers", beerRoute);
app.listen(port, () => {
    console.log("Listening");
})