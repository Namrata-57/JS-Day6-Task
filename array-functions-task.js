//  1. Solving problems using array functions on rest countries data
//  (https://restcountries.com/v3.1/all).


//  a. Get all the countries from Asia continent /region using Filter function. 
    
  const data = new XMLHttpRequest();

  data.open('GET', 'https://restcountries.com/v3.1/all');

  data.onload = function(){
    const result = JSON.parse(data.responseText);

    console.log(result.filter((country) => country.region==='Asia')); 
  }

  data.send();

//  b. Get all the countries with a population of less than 2 lakhs using Filter function.

  const data1 = new XMLHttpRequest();

  data1.open('GET', 'https://restcountries.com/v3.1/all');

  data1.onload = function(){
    const result =JSON.parse(data1.responseText);

    console.log(result.filter((peoples) => peoples.population < 200000)); 
  }

  data1.send();
    
//  c. Print the following details name, capital, flag using forEach function.
 
  const data2 = new XMLHttpRequest();

  data2.open('GET', 'https://restcountries.com/v3.1/all');

  data2.onload = function(){
    const result =JSON.parse(data2.responseText);

    result.forEach((output) => console.log("Name: ", output.name));
    result.forEach((output) => console.log("Capital: ", output.capital));
    result.forEach((output) => console.log("Flag: ", output.flag));
 }

 data2.send();
    
//  d. Print the total population of countries using reduce function

  const data3 = new XMLHttpRequest();

  data3.open('GET', 'https://restcountries.com/v3.1/all');

  data3.onload = function (){ 
    const result =JSON.parse(data3.responseText);
    
    let sum  = result.reduce((accum, curr) => {
        return accum + curr.population;
     },0);

    console.log("Total population:", sum);
  }
  
data3.send();

//  e. Print the country which uses US Dollars as currency.

  const data4 = new XMLHttpRequest();

  data4.open('GET', 'https://restcountries.com/v3.1/all');

  data4.onload = function() {
  let result = JSON.parse(data4.responseText);

  const countriesWithUSD = result.filter(function(country) {
    const currencies = country.currencies;
    return currencies && currencies.USD;
  });

  const countryNames = countriesWithUSD.map(function(country) {
    return country.name.common;
  });
  
  console.log("Countries using US Dollars:", countryNames);
}

data4.send();
