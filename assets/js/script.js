let form = document.getElementById('form');

//Form Event Listener
form.addEventListener('submit', function (event) {
    event.preventDefault();


    //Get form values

    let gender = document.querySelector('input[name="gender"]:checked').value;
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let age = parseInt(document.getElementById('age').value);
    let activityLevel = document.querySelector('input[name="activity-level"]:checked').value;
    let goal = document.querySelector('input[name="goal"]:checked').value;

    console.log(gender);
    console.log(weight);
    console.log(height);
    console.log(age);
    console.log(activityLevel);
    console.log(goal);

    calTdee();

    function calTdee() {

        let bmr = 0;
        let tdee = 0;
        let calories = 0;

        if (gender === 'female') {
            bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        } else {
            bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }
        console.log(bmr);



        //Get TDEE (Total Daily Energy Expenditure), BMr times activity level
        if (activityLevel === "sedentary") {
            tdee = bmr * 1.2;
        } else if (activityLevel === "lightly-active") {
            tdee = bmr * 1.375;
        } else if (activityLevel === "moderately-active") {
            tdee = bmr * 1.55;
        } else if (activityLevel === "very-active") {
            tdee = bmr * 1.725;
        } else {
            tdee = bmr * 1.9;
        }
        console.log(parseInt(tdee));

        // work out calories for each goal aswell as calories and gram for macros
        if (goal === "loseOne") {
            calories = tdee - 500;
        } else if (goal === "loseTwo") {
            calories = tdee - 1000;
        } else if (goal === "gain") {
            calories = tdee + 300;
        } else if (goal === "maintain") {
            calories = tdee;
        }
        console.log(parseInt(calories));

        let carbsCal = calories * 0.3;
        let carbGram = carbsCal / 4;

        let fatCal = calories * 0.3;
        let fatGram = carbsCal / 9;

        let proteinCal = calories * 0.4;
        let proteinGram = carbsCal / 4;
//Log results
        console.log(parseInt(calories));
        console.log(parseInt(carbsCal));
        console.log(parseInt(carbGram));
        console.log(parseInt(fatCal));
        console.log(parseInt(fatGram));
        console.log(parseInt(proteinCal));
        console.log(parseInt(proteinGram));
    }
    
});