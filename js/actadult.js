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
        document.getElementById("level").textContent = "Poorly or uncontrolled asthma 您的哮喘未受到控制。請立即和您的醫護人員聯絡。";
    } else if (total <= 19) {
        document.getElementById("level").textContent = "Somewhat controlled asthma 您的哮喘可能未達致良好受控的程度。請與醫護人員商討如何協助改善控制哮喘的方法。";
    } else{
        document.getElementById("level").textContent = "Well or completely controlled asthma 您的哮喘暫時控制良好。然而，哮喘受控的情況可能隨時有變動，因此建議您定期進行本測試, 和醫護人員一起檢視您的哮喘控制情況。";
    };
});

clear.addEventListener("click", function(){
    location.reload();
});