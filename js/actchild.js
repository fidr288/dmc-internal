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
    if (total < 15){
        document.getElementById("level").textContent = "Poorly or uncontrolled asthma 您的哮喘未受到控制。请立即和您的医护人员联络。";
    } else if (total <= 19) {
        document.getElementById("level").textContent = "Somewhat controlled asthma 您的哮喘可能未达致良好受控的程度。请与医护人员商讨如何协助改善控制哮喘的方法。";
    } else{
        document.getElementById("level").textContent = "Well or completely controlled asthma 您的哮喘暂时控制良好。然而，哮喘受控的情况可能随时有变动，因此建议您定期进行本测试, 和医护人员一起检视您的哮喘控制情况。";
    };
});

clear.addEventListener("click", function(){
    location.reload();
});