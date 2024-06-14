const arr = ['apple','banana','cherry']
for (const item of arr){
    console.log(item[0])
}

let language = "JavaScript"
let txt = ""
for (let x of language){
    txt += x + " ";
}
console.log(txt)

const itr_arr = [10, 20 , 30]

for (let y in itr_arr){
    console.log(y)
}

// const tArr = new Uint8Array([0x])

const itr_map = new Map([
    ["a",1],
    ["b",2],
    ["c",3]
])
console.log(itr_map)
for (const entry of itr_map){
    console.log(entry)
}

for (const [key, value] of itr_map){
    console.log(`${key}:${value}`)
}

//set
const itr_set = new Set([1,1,2,2,3,3])
console.log(itr_set)

for (const value of itr_set){
    console.log(value)
}