import { newCountries } from "./data/countries.js";

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages)
console.log('Max', Math.max(...ages))
console.log('Min', Math.min(...ages))
console.log('Median', ages[ages.length / 2])
console.log('Sum', ages.reduce( (total, curr) => total + curr, 0 ))
console.log('Average', ages.reduce((total, curr) => total + curr) / ages.length)
console.log('Range', Math.max(...ages) - Math.min(...ages))

let topTen = newCountries.splice(0, 10)
console.log(topTen)
console.log(topTen[Math.floor(ages.length / 2)], topTen[Math.ceil(ages.length / 2)])
if (topTen.length  % 2 == 0) {
    console.log('Countries list is even, separating into two different arrays', ages)
    console.log(ages.slice(0, 5), '\n\n', ages.splice(5, ages.length))
}
