const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3030;

// Serve static files from the public directory
app.use(express.static('public'));
app.use('/courses', express.static(path.join(__dirname, '..', 'courses')));

// Serve folder icons
app.get('/folder-icon/:subdir', (req, res) => {
    const subdir = req.params.subdir;
    const possibleIcons = ['icon.png', 'icon.jpeg', 'icon.jpg'];
    let iconPath;

    for (let ext of possibleIcons) {
        iconPath = path.join(__dirname, 'Videos', subdir, ext);
        if (fs.existsSync(iconPath)) {
            return res.sendFile(iconPath);
        }
    }

    // If no icon is found, return a 404 status
    res.status(404).send('Icon not found');
});

// Route to fetch directory content (folders and videos)
app.get('/videos/:subdir', (req, res) => {
    const subdir = req.params.subdir ;
    const videoDir = path.join(__dirname, '..', 'courses', subdir,"lectures");

    fs.readdir(videoDir, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const content = files.map(file => {
            const fullPath = path.join(videoDir, file);
            const isDirectory = fs.lstatSync(fullPath).isDirectory();
            return {
                name: file,
                isDirectory
            };
        });
        res.json(content);
    });

    // res.send("Hello")
});



app.get('/videos/:subdir/:filename', (req, res) => {
    const subdir = req.params.subdir;
    const filename = req.params.filename;
    console.log(filename);
    const videoPath = path.join(__dirname,'..', 'courses', subdir,'lectures', filename);
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        if (start >= fileSize) {
            res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return;
        }

        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});

// Route to stream video
app.get('/video/:subdir/:filename', (req, res) => {
    const subdir = req.params.subdir;
    const filename = req.params.filename;
    const videoPath = path.join(__dirname, 'Videos', subdir, filename);
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        if (start >= fileSize) {
            res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return;
        }

        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve folder-specific pages
app.get('/:folder', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
