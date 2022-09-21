var form = document.getElementById('form');

function calTdee() {

    var bmr = 0;
    let tdee = 0;
    var calories = 0;


    //Calculate Basal metabolic Rate (BMR) by determining if it is female or male and calculating accordingly.
    if (gender === 'female') {
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }
    console.log(bmr);



    //Get TDEE (Total Daily Energy Expenditure), BMr times activity level
    // if (activityLevel === "sedentary") {
    //     tdee = bmr * 1.2;
    // } else if (activityLevel === "lightly-active") {
    //     tdee = bmr * 1.375;
    // } else if (activityLevel === "moderately-active") {
    //     tdee = bmr * 1.55;
    // } else if (activityLevel === "very-active") {
    //     tdee = bmr * 1.725;
    // } else {
    //     tdee = bmr * 1.9;
    // }

    let tdeeMap = {
        sedentary: bmr * 1.2,
        "lightly-active": bmr * 1.375,
        "moderately-active": bmr * 1.55,
        "very-active": bmr * 1.725,
        "extremely-activity": bmr * 1.9,
    };

    tdee = tdeeMap[activityLevel];


    console.log(parseInt(tdee));

    // work out calories for each goal
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


    // Workout calories and grams for macros
    var carbsCal = calories * 0.3;
    var carbGram = carbsCal / 4;

    var fatCal = calories * 0.3;
    var fatGram = carbsCal / 9;

    var proteinCal = calories * 0.4;
    var proteinGram = carbsCal / 4;

    //Log results to console to ensure is correctly calculated
    console.log(parseInt(calories));
    console.log(parseInt(carbsCal));
    console.log(parseInt(carbGram));
    console.log(parseInt(fatCal));
    console.log(parseInt(fatGram));
    console.log(parseInt(proteinCal));
    console.log(parseInt(proteinGram));
}

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



});