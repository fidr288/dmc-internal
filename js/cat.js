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
    document.getElementById("message").textContent = "Total score = " + total;
    if (total <= 5){
        document.getElementById("level").textContent = "Impact level = Normal";
        document.getElementById("clinical").textContent = "Upper limit of normal in healthy non-smokers";
    } else if (total <= 9) {
        document.getElementById("level").textContent = "Impact level = Low";
        document.getElementById("clinical").textContent = "Most days are good, but COPD causes a few problems and stops people doing one or two things that they would like to do. They usually cough several days a week and get breathless when playing sports and games and when carrying heavy loads. They have to slow down or stop when walking up hills or if they hurry when walking on level ground.They get exhausted easily.";
        document.getElementById("recommendation").innerHTML = "<h4>Clinical recommedations</h4><ul><li>smoking cessation</li><li>annual flu imm</li><li>reduce exposure to exacerbation risk factors</li><li>Therapy as warranted</li></ul>";
    } else if (total <= 20){
        document.getElementById("level").textContent = "Impact level = Medium";
        document.getElementById("clinical").textContent = "COPD is one of the most important problems that they have. They have a few good days a week, but cough up sputum on most days and have one or two exacerbations a year. They are breathless on most days and usually wake up with chest tightness or wheeze. They get breathless on bending over and can only walk up a flight of stairs slowly. They either do their housework slowly or have to stop for rests.";
        document.getElementById("recommendation").innerHTML = "<h4>Clinical recommedations</h4><ul><li>Review maintenance therapy</li><li>referral to pulmonary rehab</li><li>minimise and manage exacerbations</li><li>still smoking?</li></ul>";
    } else if (total <= 30){
        document.getElementById("level").textContent = "Impact level = High";
        document.getElementById("clinical").textContent = "COPD stops them doing most things that they want to do. They are breathless walking around the home and when getting washed or dressed. They may be breathless when they talk. Their cough makes them tired and their chest symptoms disturb their sleep on most nights. They feel that exercise is not safe for them and everything they do seems too much effort. They are afraid and panic and do not feel in control of their chest problem";
        document.getElementById("recommendation").innerHTML = "<h4>Clinical recommedations</h4><ul><li>Referral specialist care</li><li>additional pharmacological treatment in appropriate</li><li>referral to pulmonary rehab</li><li>minimise and manage exacerbations</li></ul>";
    } else{
        document.getElementById("level").textContent = "impact level = Very High";
        document.getElementById("clinical").textContent = "Their condition stops them doing everything they want to do and they never have any good days. If they can manage to take a bath or shower, it takes them a long time. They cannot go out of the house for shopping or recreation, ordo their housework. Often, they cannot go far from their bed or chair. They feel as if they have become an invalid.";
        document.getElementById("recommendation").innerHTML = "<h4>Clinical recommedations</h4><ul><li>Referral specialist care</li><li>additional pharmacological treatment in appropriate</li><li>referral to pulmonary rehab</li><li>minimise and manage exacerbations</li></ul>";
    };
});

clear.addEventListener("click", function(){
    location.reload();
});