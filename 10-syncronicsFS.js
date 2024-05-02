const {readFileSync, writeFileSync}  = require('fs')
console.log("start")
// OR
// const fs  = require ('fs')
// fs.read
const first  = readFileSync('./content/first.txt', 'utf8' )
const second  = readFileSync('./content/second.txt', 'utf8' )
// console.log(first, second)

writeFileSync('./content/third.txt', `Are you sure ${first} and ${second}`, {flag:'a'})
console.log('done with this task')

console.log("starting a new line")