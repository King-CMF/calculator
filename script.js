function add (A, B){
    let ans = 0
    ans = A + B
}

function sub (A, B){
    let ans = 0
    if (A > B){
        ans = A - B
    } else {
        ans = B - A
    }
}

function div (A, B){
    let ans = 0
    ans = A/B
}

function mult (A, B){
    let ans = 0
    ans = A*B
}

const screen = document.querySelector(".screen")
const button = document.querySelectorAll(".bnt1")

button.forEach(button => {
    button.addEventListener("click", (event) => {
        screen.textContent += event.target.textContent
    });
});