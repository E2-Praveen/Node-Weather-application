const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')


weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                const weather = 'Climate: ' + data.forecast.climate
                const curren_degree = 'Cureent Degree: ' + data.forecast.Current_Degree
                const chance_rain = 'Chance of Rain: ' + data.forecast.Chance_of_Rain

                messageOne.textContent = 'Location: '+data.location
                messageTwo.textContent = weather
                messageThree.textContent = curren_degree+'°C'
                messageFour.textContent = chance_rain
            }
        })
    })
})