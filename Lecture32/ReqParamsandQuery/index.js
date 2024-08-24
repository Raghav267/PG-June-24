const express = require("express");
const app = express();

app.use((req, res) => {
    // console.log(req);
    console.log("reqest sent!!!")

})

// app.get("/r/cat", () => { });
// app.get("/r/dog", () => { });
// app.get("/r/mangoes", () => { })
// app.get("/r/grapes", () => { })

app.get("/r/:subreddit", (req, res) => {
    console.log(req.params)
    console.log("WE have tried to route soemthing")
    res.send("hello from subreddit.")
})


app.listen(3000, () => {
    console.log("Server start running at 3000 port")
})