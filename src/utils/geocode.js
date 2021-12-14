const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJhdmVlbjE1IiwiYSI6ImNrd3cxZXBhbzB5NTAycG1pbzRmOXR1NGEifQ.q3jzsS8fzZjaZdGib0Iogw&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('unable to get service..!', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find the location,Try another..!', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode