import { newCountries } from "./data/countries.js"
import { webTechs } from "./data/web_techs.js"

console.log("Countries (from countries.js): ", newCountries);
console.log("WebTechs from web_techs.js: ", webTechs);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(",", "").replace(".", "").split(" ")
console.log(words, words.length)

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart[2] = 'Green Tea'
console.log(shoppingCart)

if (newCountries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
}
else {
  newCountries.push('Ethiopia')
}
console.log('Countries: ', newCountries)


if (webTechs.includes('SASS')) { console.log('SASS is a CSS Preprocess')}
else {
  webTechs.push('SASS')
  console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log("Fullstack Tech", fullStack)