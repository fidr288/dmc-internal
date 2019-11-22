let button = document.getElementById("calc");
let clear = document.getElementById("clear");


button.addEventListener("click", function(){
    let one = parseInt(document.querySelector('input[name="one"]:checked').value);
    let two = parseInt(document.querySelector('input[name="two"]:checked').value);
    let three = parseInt(document.querySelector('input[name="three"]:checked').value);
    let four = parseInt(document.querySelector('input[name="four"]:checked').value);
    let five = parseInt(document.querySelector('input[name="five"]:checked').value);
    total = +(one+two+three+four+five);
    document.getElementById("message").textContent = "Total score = " + total;
    if (total < 15){
        document.getElementById("level").textContent = "Poorly or uncontrolled asthma";
    } else if (total <= 19) {
        document.getElementById("level").textContent = "Somewhat controlled asthma ";
    } else{
        document.getElementById("level").textContent = "Well or completely controlled asthma ";
    };
});

clear.addEventListener("click", function(){
    location.reload();
});