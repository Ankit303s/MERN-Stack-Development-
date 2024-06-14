const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5,3,20,4,5,10))
console.log(Math.max(-5,3,20,4,5,10))


const randNum = Math.random()
console.log(randNum*10)

const paragraph = "My name is Debasish Sahoo. I live in India, Kolkata.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the World of Javascript challenge and\
I hope you are enjoying too."
console.log(paragraph)


const num = Math.floor(Math.random()*11)
console.log(num)

console.log(Math.abs(-10))

console.log(Math.sqrt(100))
console.log(Math.sqrt(2))

console.log(Math.pow(3, 2))
console.log(Math.E)


let space = ' '
let firstName = 'Ankit'
let lastName = 'Singh'
let country = 'India'
let city = 'Kanpur'
let language = 'Javascript'
let job = 'student'
let age = 20

let FullName = firstName + space + lastName
console.log(FullName)


let personInfoOne = FullName + ' I am ' + age + ' I live in ' + city
console.log(personInfoOne)


let personInfoTwo =  `I am ${FullName}. I am ${age} years old. I live in ${city}, ${country}. I am a ${job}. I am learning ${language}`
console.log(personInfoTwo)

console.log('I hope everyone is enjoying the World Of JavaScript challenge.\nDoyou ?') // line break
        console.log('World\tTopics\tExercises')
        console.log('Day 1\t3\t5')
        console.log('Day 2\t3\t5')
        console.log('Day 3\t3\t5')
        console.log('Day 4\t3\t5')
        console.log('This is a backslash symbol (\\)') // To write a backslash
        console.log('In every programming language it starts with \"Hello, World!\"')
        console.log("In every programming language it starts with \'Hello, World!\'")
        console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

let country1 = 'India'
console.log(country1.substr(3, 4)) 
console.log(country1.substring(0, 3))
console.log(country1.substring(3, 7)) 

let string = 'World Of JavaScript'
console.log(string.split()) // Changes to an array -> ["World Of JavaScript"]
console.log(string.split(' '))