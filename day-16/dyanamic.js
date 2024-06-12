const articleparagraph = document.querySelectorAll("article > p")
console.log(articleparagraph)

for (const paragraph of articleparagraph){
    paragraph.classList.add("ap")
}

const articledivs = document.querySelectorAll("article > div")
console.log(articleparagraph)

for (const paragraph of articledivs){
    paragraph.classList.add("dp")
}