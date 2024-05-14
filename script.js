let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomcolor(){
let val1 = 0 + Math.random()*255
let val2 = 0 + Math.random()*255
let val3 = 0 + Math.random()*255
 
return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomcolor()
    e.style.color = getRandomcolor()
})