// Our array
const locations = [
  {
    name: 'New York, NY, USA',
    weather: 'Clear',
    degrees: 3
  },
  {
    name: 'Los Angeles, CA, USA',
    weather: 'Clear',
    degrees: 6
  },
  {
    name: 'Las Vegas, NV, USA',
    weather: 'Clear',
    degrees: 4
  },
  {
    name: 'Rio de Janeiro, State of Rio de Janeiro, BR',
    weather: 'Mostly Cloudy',
    degrees: 25
  },
  {
    name: 'Rome, Metropolitan City of Rome, Italy',
    weather: 'Sunny',
    degrees: 16
  },
  {
    name: 'Natal, State of Rio Grande do Norte, BR',
    weather: 'Light Drizzle',
    degrees: 28
  }
]

// Just for good expression :)
const getWeather = () => {
  process.stdout.write('Select a city by its number (-1 to finish the app): ')
}

// Allow us to read the the stdin
const stdin = process.stdin.resume()

// Grab the data from stdin
stdin.addListener('data', (data) => {
  const input = data.toString()
  if (isNaN(input)) console.log('ERROR: you need to input a number!')
  else {
    const index = parseInt(input)

    if (index === -1) {
      console.log('Have a good day, bye!')
      process.exit(0)
    } else {
      const loc = locations[index]
      if (loc !== undefined) {
        const { name, weather, degrees } = loc
        const currentTime = new Date()

        console.log(`> ${name}`)
        console.log(`> ${weather} ${degrees}°C`)
        console.log(`> ${currentTime}`)
      } else console.log('ERROR: location not found!')
    }
  }

  // Yeah, that's a flashpoint!
  getWeather()
})

console.log('==============[ SIMPLE TESTING WEATHER AND TIME ]==============')
console.log('Available cities: ')
locations.forEach((loc, index) => {
  const { name } = loc
  console.log(`${index} - ${name}`)
})
console.log('\nI hope that more cities will be added, if I got hired :P\n')
console.log('--------------------')

// Call us!
getWeather()