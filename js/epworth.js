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
    let eight = parseInt(document.querySelector('input[name="eight"]:checked').value);
    total = +(one+two+three+four+five+six+seven+eight);
    document.getElementById("message").textContent = "Sleep score = " + total;
    if (total <= 10){
        document.getElementById("level").textContent = "normal sleep levels";
    } else if (total <= 14) {
        document.getElementById("level").textContent = "Mild sleep disturbance";
    } else if (total <= 17){
        document.getElementById("level").textContent = "Moderate sleep disturbance";
    } else{
        document.getElementById("level").textContent = "Severe sleep disturbance";
    };
});
clear.addEventListener("click", function(){
    location.reload();
});