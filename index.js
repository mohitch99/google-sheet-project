const dotenv = require('dotenv');
dotenv.config({ path: ".env" });

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile('views/test.html', {root: __dirname })
});

app.post('/save_form', function(req, res) {
    console.log(req.body);
    res.send("hi");
});

app.listen(process.env.PORT, () => {
    console.log("Server is ready");
});
