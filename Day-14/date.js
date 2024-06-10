const now = new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getTime())
console.log(now.getHours())
console.log(now.getMilliseconds())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.toDateString())
console.log(now.toISOString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())

const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(` ${date}/${month}/${year}/${hours}/${minutes}`)