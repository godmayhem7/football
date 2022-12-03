let exp = require("express")

let app = exp()
let port = process.env.PORT || 3000

app.use(exp.static("public"))

app.get("/",(req,res)=>{
   res.sendFile(__dirname + "/index.html")
})

app.listen(port)