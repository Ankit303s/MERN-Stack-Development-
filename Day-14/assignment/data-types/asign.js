

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

//level - 2

//1
let statement1 = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' \
 by John Holmes teaches us to help one another."
 console.log(statement1)

 //2
 let statement2 = "Love is not patronizing and charity isn\'t about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don\'t just \
give money but reach out your hand instead."
console.log(statement2)

//3
let num1 = '10'
let num2 = 10
console.log(typeof(num1) == typeof(num2)) //false
num1 = parseInt(num1)
console.log(typeof(num1)) //Number

//4
let num3 = 9.8
let num4 = 10
console.log(num3 == num4) //false
num3 = Math.round(num3)
num3 = parseInt(num3)
console.log(num3) //10

//5
let lan1 = 'python, jargon'
console.log(lan1.match(/on/g))

//6
let sentence3 = "I hope this course is not full of jargon"
console.log(sentence3.includes('jargon'))


//7
console.log(Math.random()*100)

//8
console.log((Math.random()*50)+50)

//9
console.log(Math.random()*255)

//10
str1 = 'JavaScript'
console.log(str1[Math.round(Math.random()*7)])

//11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");


//level 3

//1 
let sentence4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence4.match(/love/g))

//2 clean the text 
const sentence5 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is Welcome to#World&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence5)
let sentence6 = sentence5.replaceAll('$', '')
sentence6 = sentence6.replaceAll('$', '')
sentence6 = sentence6.replaceAll('@', '')
sentence6 = sentence6.replaceAll('&', '')
sentence6 = sentence6.replaceAll('%', '')
sentence6 = sentence6.replaceAll('#', '')
sentence6 = sentence6.replaceAll(';', '')
console.log(sentence6)

//3 calculating monthly income
let monthly = 5000
let bonus = 10000
let online_courses = 15000
annual_income = (monthly*12 + bonus + online_courses*12)
console.log(`The annual income is ${annual_income}`)