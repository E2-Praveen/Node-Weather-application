const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4a8cac80a2a9383dc1c7fad1d9a77a99&query=' + address + '&units=m'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to get the weather service..!', undefined)
        }
        else if (body.error) {
            callback('Unable to get the location..!', undefined)
        } 
        else {
            callback(undefined, {
                climate: body.current.weather_descriptions[0],
                Current_Degree: body.current.temperature,
                feels_like: body.current.feelslike,
                Chance_of_Rain: body.current.precip
            })
        }
    })
}

module.exports = forecast