const express = require('express');

const app = express();

app.use(express.json({ extended: false })); 

const PORT = process.env.PORT || 5004;

app.get("/", (req, res) => {
    res.status(200).json({ msg: "This is root" });
})

app.listen(PORT, () => {
    console.log(`Server has been started\nhttp://localhost:${PORT}`)
})