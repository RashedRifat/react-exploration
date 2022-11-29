// Exercise Level 1 - Working With Arrays 

let emptyArr = [];
let demoArr = ['apple', 'orange', 'banana', 'mango', 'kiwi', 'grape', 'lychee'];
console.log(demoArr.length);
console.log(demoArr[0], demoArr[3], demoArr[demoArr.length -  1]); 

let mixedDataTypes = [
    'apple', 10, ['Nvidia', 'Chips', 'Oracle']
];
console.log('MixedDataTypes: ', mixedDataTypes);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[(itCompanies.length - 1) / 2], itCompanies[itCompanies.length -1])

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]); 
}

console.log()

itCompanies.forEach(company => {
    console.log(company.toUpperCase())
})
console.log(itCompanies.join(", "))

itCompanies = itCompanies.sort()
console.log('Sorted Companies: ', itCompanies)

itCompanies = itCompanies.reverse()
console.log('Reversed Companies: ', itCompanies)

console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

console.log('\nCurrent companies: ', itCompanies.join(' '))
console.log("Removing the middle company")
let itMiddle = (itCompanies.length - 1) /  2
itCompanies.splice(itMiddle, 1)
console.log(itCompanies)

console.log("\nRemoving the first company")
itCompanies.shift()
console.log(itCompanies)

console.log('\nRemoving the middle company')
itMiddle = (itCompanies.length - 1) / 2
itCompanies.splice(itMiddle, 1)
console.log(itCompanies)

console.log('\nremoving the last company')
itCompanies.pop()
console.log(itCompanies)

console.log('\nremoving all of the companies')
itCompanies = itCompanies.splice()
console.log(itCompanies)