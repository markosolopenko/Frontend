var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
}

// add element to speakers
function addSpeaker(value) {
    let speakersArray = nestedObject.speakers;
    speakersArray.push({name: value});
}
addSpeaker('Nila');


// add language
function addLanguage(lang, value) {
    nestedObject.data.languages[lang] = {
        hello: value
    }
}
addLanguage('ukrain', 'Привіт');


// add country 
function addCountry(countryEuropean, capital, population) {
    nestedObject.data.continents.europe.countries[countryEuropean] = {
        capital: capital,
        population: population
    }
}
addCountry("England", "London",  40000000);
