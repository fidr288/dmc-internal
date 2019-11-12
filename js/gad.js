let button = document.getElementById("calc");
let clear = document.getElementById("clear");


button.addEventListener("click", function(){
    let one = parseInt(document.querySelector('input[name="one"]:checked').value);
    let two = parseInt(document.querySelector('input[name="two"]:checked').value);
    let three = parseInt(document.querySelector('input[name="three"]:checked').value);
    let four = parseInt(document.querySelector('input[name="four"]:checked').value);
    let five = parseInt(document.querySelector('input[name="five"]:checked').value);
    let six = parseInt(document.querySelector('input[name="six"]:checked').value);
    let seven = parseInt(document.querySelector('input[name="seven"]:checked').value);
    total = +(one+two+three+four+five+six+seven);
    document.getElementById("message").textContent = "Total score = " + total;
    if (total <= 4){
        document.getElementById("level").textContent = "Minimal anxiety";
    } else if (total <= 9) {
        document.getElementById("level").textContent = "Mild anxiety";
    } else if (total <= 14){
        document.getElementById("level").textContent = "Moderate anxiety";
    } else{
        document.getElementById("level").textContent = "Severe anxiety";
    };
});

clear.addEventListener("click", function(){
    location.reload();
});