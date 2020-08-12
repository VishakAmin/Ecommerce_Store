require('dotenv').config()

const mongoose = require('mongoose');

const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors")

//My routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const cartegoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const paymentBRoutes = require("./routes/paymentBRoutes")


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(() => {
    console.log("DB CONNECTED")

});

//middlewares
app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());


// My  routes

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", cartegoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);






//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App is running at ${port}`);
});


if (process.env.NODE_ENV === "production"){
    app.use(express.static('projfrontend/build'))
    
    
    app.get("*",(res,req) => {
        res.sendFile(path.resolve(__dirname,"../projfrontend","build","index.html"))
    })
}