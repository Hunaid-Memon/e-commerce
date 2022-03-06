const express = require('express');
const app = express();
const connectDB = require('./config/db')

connectDB();

app.use(express.json({ extended: false })); 

const PORT = process.env.PORT || 5004;

app.get("/", (req, res) => {
    res.status(200).json({ msg: "This is e-commerce" });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

app.listen(PORT, () => {
    console.log(`Server has been started\nhttp://localhost:${PORT}`)
})