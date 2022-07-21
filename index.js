let countNumber = document.getElementById("count-number")
let count = 0
function button(){
    count = count + 1
    countNumber.innerText = count
}
function buttonMinus(){
    count = count - 1
    countNumber.innerText = count
}

function save(){
    console.log(count)
}
