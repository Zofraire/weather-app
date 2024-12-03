const axios = require('axios');
const fs = require('fs');

async function fetchWeatherData() {
    try {
        const response = await axios.post('https://weather.gov.mn/api/get/obs/data', {}, {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'origin': 'http://tsag-agaar.gov.mn',
                'referer': 'http://tsag-agaar.gov.mn/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
            },
        });

        // Save the response data to a file
        fs.writeFileSync('weather_data.json', JSON.stringify(response.data));
        console.log('Weather data saved successfully.');
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Run the function to fetch the data
fetchWeatherData();
