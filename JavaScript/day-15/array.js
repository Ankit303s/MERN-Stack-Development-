const arr1 = Array()
console.log(arr1)

const arr2 = new Array()
console.log(arr2)

const arr3 = []
console.log(arr3)

const numbers = [0, 3.14, 9.81, 37, 98.5, 100]
const fruits = ['bananas', 'orange', 'mango', 'lomon']
console.log('Numbers:', numbers)
console.log('Numbers of numbers:', numbers.length)
console.log('Fruits :',fruits)
console.log('Numbers of fruits:',fruits.length)

const arr4 = ['Ankit',250, true, 
    {country: 'India', city: 'Kolkata'},
    {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
]
console.log(arr4)


let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)


let txt = 
    'I love teaching and empowering people. I teach HTML, CSS ,JS, React, Python.'
    const words = txt.split(' ')
console.log(words)

console.log("First fruit of BaseIndex :",fruits[0])
console.log("second Fruit :", fruits[1])
let lastIndex = fruits.length - 1
console.log("last Fruits :", lastIndex)

const number = [1,2,3,4]
console.log('number :', number)
number[0] = 10;
number[1] = 20;
console.log("number :", number)

const arr = Array()
console.log(arr)
const eightEmptyvalues = Array(8)
console.log(eightEmptyvalues)

const eight_X_Values = Array(8).fill('x')
console.log('eight_X_values :',eight_X_Values)

const firstlist = [1,2,3]
const secondlist = [4,5,6]
const thirdlist = firstlist.concat(secondlist)
console.log(thirdlist)

// const numbers = [0, 3.14, 9.81, 37, 98.5, 100]
// const fruits = ['bananas', 'orange', 'mango', 'lomon']

console.log(numbers.indexOf(3.14))
console.log(numbers.indexOf(9.81))
console.log(numbers.indexOf(98.5))

console.log(fruits.indexOf('bananas'))
console.log(fruits.indexOf('mango'))
console.log(fruits.indexOf('orange'))

let index = fruits.indexOf('banana')
let msg=index === 0 ? 'Banana does not exist' : 'Banana exist'
console.log('msg :', msg)

let num =  [1,2,3,4,5,6,3,1,2]
console.log(num.lastIndexOf(2))
console.log(num.lastIndexOf(1))
console.log(num.lastIndexOf(3))
console.log(num.lastIndexOf(4))
console.log(num.lastIndexOf(5))

let names = ['Debasish', 'Shubhankar', 'Ankit', 'Abhay']
console.log(names.toString())
console.log(names.join(''))
console.log(names.join(','))
console.log(names.join(' '))

number1 = [1,2,3,4,5,9,3,2]
console.log(number1.slice())
console.log(number1)
number1.splice(3,2,7,8)
console.log(number1)






