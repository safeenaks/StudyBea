const express = require('express');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

/* SAVE TIME */
app.post('/save-time', (req, res) => {
    const { date, time } = req.body;
    fs.appendFileSync('study_log.txt', `${date},${time}\n`);
    res.send("Saved");
});

/* GET DATA */
app.get('/data', (req, res) => {
    if (!fs.existsSync('study_log.txt')) return res.json({});

    const lines = fs.readFileSync('study_log.txt', 'utf-8').split('\n');

    let result = {};

    lines.forEach(line => {
        if (!line) return;

        let [date, time] = line.split(',');
        result[date] = (result[date] || 0) + parseInt(time);
    });

    res.json(result);
});

/* UPLOAD IMAGE */
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ filename: req.file.filename });
});

app.use('/uploads', express.static('uploads'));

app.listen(3000, () => console.log("Server running on port 3000"));