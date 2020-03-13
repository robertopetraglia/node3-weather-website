const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ed67a671d9bd2a7f7fffcb3897aef06b/' + latitude + ',' + longitude;
    const configUrlWeather = {
        url,
        json: true
    };
    request(configUrlWeather, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degree out. There is a ' + body.currently.precipProbability + '% change of rain.')
        }
    })
}

module.exports = forecast;