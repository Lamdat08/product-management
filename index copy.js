const express = require('express');
require('dotenv').config(); 

const database = require("./config/database");

const routeAdmin = require("./routes/admin/index.router"); 
const route = require("./routes/client/index.route"); 


database.connect(); 

const app = express()
const port = process.env.PORT; 
app.set("views","./views"); 
app.set("view engine","pug");
// app.get("/",(req,res)=>{ 
//    res.render("client/pages/home/index"); 
// }); 

// app.get('/product', async (req,res) => {
//     res.render("client/pages/products/index"); 
// }); 
app.use(express.static("public")); 

routeAdmin(app); 
route(app);   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})