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
    let nine = parseInt(document.querySelector('input[name="nine"]:checked').value);
    let ten = parseInt(document.querySelector('input[name="ten"]:checked').value);
    total = +(one+two+three+four+five+six+seven+eight+nine+ten);
    document.getElementById("message").textContent = "Total score = " + total;
    if (total <= 19){
        document.getElementById("level").textContent = "Low level of distress";
    } else if (total <= 24) {
        document.getElementById("level").textContent = "Mild level of distress";
    } else if (total <= 29){
        document.getElementById("level").textContent = "Moderate level of distress";
    } else{
        document.getElementById("level").textContent = "Severe level of distress";
    };
});

clear.addEventListener("click", function(){
    location.reload();
});
