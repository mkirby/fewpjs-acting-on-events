// Your code here

dodger.style.backgroundColor = "red";
dodger.style.bottom = "5px";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px");
    let left = parseInt(leftNumbers);
    
    if (left > 0) {
        dodger.style.left = `${left - 15}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px");
    let left = parseInt(leftNumbers);
    
    if (left < 360) {
        dodger.style.left = `${left + 15}px`;
    }
}