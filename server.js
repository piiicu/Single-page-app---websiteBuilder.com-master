const exp = require("constants")
const express = require("express")
const path = require("path")

const app = express()

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "app.html"))
})

app.listen(process.env.PORT || 8087, () => console.log("Server is running in PORT 8087 "))