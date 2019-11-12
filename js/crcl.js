let button = document.getElementById("calc");
let clear = document.getElementById("clear");

button.addEventListener("click", function(){
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let age = document.getElementById("age").value;
    let mass = document.getElementById("mass").value;
    let cr = document.getElementById("cr").value;
    if (gender == 'male') {
        crcl = +((140-age)*mass*1.23/cr).toFixed(2);
    } else {
        crcl = +((140-age)*mass*1.04/cr).toFixed(2);
    };2350

    if (crcl < 10){
        document.getElementById("allopurinol").textContent = "Allopurinol dose = 100mg alternate days (max 100mg daily)";
        document.getElementById("colchicine").textContent = "Colchicine  = Avoid";
    } else if (crcl <= 20) {
        document.getElementById("allopurinol").textContent = "Allopurinol dose= 100-200mg daily!";
    };

    if (crcl < 15){
        document.getElementById("metformin").textContent = "Metformin = Avoid";
    } else if (crcl <= 30) {
        document.getElementById("metformin").textContent = "Metformin dose = max 500mg daily";
    } else if (crcl <= 60) {
        document.getElementById("metformin").textContent = "Metformin dose = max 1000mg daily";
    };

    if (crcl <= 50){
        document.getElementById("vildagliptin").textContent = "Vildagliptin = 75mg once daily";
    };

    if (crcl < 60){
        document.getElementById("bezafibrate").textContent = "Bezafibrate = Avoid";
    };

    if (crcl < 15){
        document.getElementById("contrimoxazole").textContent = "Cotrimoxazole = Avoid";
    } else if (crcl < 30) {
        document.getElementById("contrimoxazole").textContent = "Cotrimoxazole = Use half normal dose";
    };

    if (crcl < 30){
        document.getElementById("dabigatran").textContent = "Dabigatran = Avoid";
        document.getElementById("simvastatin").textContent = "Simvastatin = doses above 10mg daily should be used with caution.";
    } else if (crcl <= 50) {
        document.getElementById("dabigatran").textContent = "Dabigatran = 110mg bd";
    };    

    if (crcl < 10){
        document.getElementById("venlafaxine").textContent = "Venlafaxine = Avoid";
    } else if (crcl < 30) {
        document.getElementById("venlafaxine").textContent = "Venlafaxine = use half normal dose";
    }; 
    document.getElementById("message").textContent = "creatinine clearance = "+ crcl + " mL/min";
});

clear.addEventListener("click", function(){
    location.reload();
});


