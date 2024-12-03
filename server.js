const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for frontend requests
app.use(cors());

// Endpoint to fetch weather data from the local JSON file
app.get('/weather', (req, res) => {
    fs.readFile('weather_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the JSON file:', err);
            return res.status(500).json({ message: 'Failed to fetch weather data' });
        }

        // Parse and send the data from the JSON file
        res.status(200).json(JSON.parse(data));
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
