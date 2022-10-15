const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const express = require('express');
const cors = require('cors');
const gsheetsClient = require('./gsheets');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile('views/form.html', { root: __dirname })
});

app.post('/save_form', async (req, res) => {
    try {
        const { name, email } = req.body;
        await gsheetsClient.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEETID,
            range: 'Sheet1!A1:B',
            valueInputOption: 'RAW',
            resource: {
                values: [
                    [name, email],
                ]
            }
        });
    } catch (err) {
        console.log(err);
    }
    res.redirect('/');
});

app.use((req, res) => {
    res.redirect('/');
})

app.listen(process.env.PORT, () => {
    console.log('Server is ready');
});
