

//Level 1 

//1
let challenge = 'World of JavaScript'

//2
console.log(challenge)

//3
console.log(challenge.length)

//4
console.log(challenge.toUpperCase())

//5
console.log(challenge.toLowerCase())

//6
console.log(challenge.substring(0,5))

//7
console.log(challenge.substring(7,19))

//8
console.log(challenge.includes("Script"))

//9
console.log(challenge.split(''))

//10
console.log(challenge.split(' '))

//11
let mnc =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(mnc.split(','))

//12
console.log(`Welcome to ${challenge.replace('JavaScript', 'Python')}`)

//13
console.log(challenge.charAt(15))

//14
console.log(challenge.charCodeAt('J'))

//15
console.log(challenge.indexOf('a'))

//16
console.log(challenge.lastIndexOf('a'))

//17
let para = 'You cannot end a sentence with because because because is a conjunction'
console.log(para.indexOf('because'))

//18
console.log(para.lastIndexOf('because'))

//19
console.log(para.search('because'))

//20
challenge1 = ' CSS Magic  '
console.log(challenge1.trim())

//21
console.log(challenge.startsWith('World'))

//22
console.log(challenge.endsWith('Script'))

//23
let pattern = /a/gi
console.log(challenge.match(pattern))

//24
let string = "Welcome to "
console.log(string.concat(challenge, "."))

//25
console.log(challenge.repeat(2))