let form = document.getElementById('form');

//Get form values
const gender = document.querySelector('input[name="gender"]:checked');
const weight = parseFloat(document.getElementById('weight'));
const height = parseFloat(document.getElementById('height'));
const age = parseInt(document.getElementById('age'));
const activityLevel = document.querySelector('input[name="activity-level"]:checked');
const goal = document.querySelector('input[name="goal"]:checked');

//Form Event Listener
form.addEventListener('submit', function(event) {
    event.preventDefault();


    //Make sure we get the correct values
    // console.log(gender);
    // console.log(weight);
    // console.log(height);
    // console.log(age);
    // console.log(activityLevel);
    // console.log(goal);

    calTdee();

    



function calTdee() {

    let bmr = 0;
    let tdee = 0;
    let calories = 0;


    //Calculate Basal metabolic Rate (BMR) by determining if it is female or male and calculating accordingly.
    if (gender === 'female') {
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }
    // console.log(bmr);



    //Get TDEE (Total Daily Energy Expenditure), BMr times activity level orignal
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

    //Get TDEE (Total Daily Energy Expenditure), BMr times activity level
    let tdeeMap = {
        "sedentary": bmr * 1.2,
        "lightly-active": bmr * 1.375,
        "moderately-active": bmr * 1.55,
        "very-active": bmr * 1.725,
        "extremely-activity": bmr * 1.9,
    };

    tdee = tdeeMap[activityLevel];


    // console.log(parseInt(tdee));

    let calorieMap = {
        "loseOne": tdee - 500,
        "loseTwo": tdee - 1000,
        "gain": tdee + 300,
        "maintain": tdee,
    };

    calories = calorieMap[goal];

    // work out calories for each goal orginal
    // if (goal === "loseOne") {
    //     calories = tdee - 500;
    // } else if (goal === "loseTwo") {
    //     calories = tdee - 1000;
    // } else if (goal === "gain") {
    //     calories = tdee + 300;
    // } else if (goal === "maintain") {
    //     calories = tdee;
    // }
    // console.log(parseInt(calories));


    // Workout calories and grams for macros
    let carbsCal = calories * 0.3;
    let carbGram = carbsCal / 4;

    let fatCal = calories * 0.3;
    let fatGram = carbsCal / 9;

    let proteinCal = calories * 0.4;
    let proteinGram = carbsCal / 4;

    //Log results to console to ensure is correctly calculated
    // console.log(parseInt(calories));
    // console.log(parseInt(carbsCal));
    // console.log(parseInt(carbGram));
    // console.log(parseInt(fatCal));
    // console.log(parseInt(fatGram));
    // console.log(parseInt(proteinCal));
    // console.log(parseInt(proteinGram));

const bmrValue = parseInt(bmr);
const tdeeValue = parseInt(tdee);
const calValue = parseInt(calories);
const carbCalValue = parseInt(carbsCal);
const carbGramValue = parseInt(carbGram);
const fatCalValue = parseInt(fatCal);
const fatGramValue = parseInt(fatGram);
const proteinCalValue = parseInt(proteinCal);
const proteinGramValue = parseInt(proteinGram);


//Set value to session storage
sessionStorage.setItem('calories', calValue);
sessionStorage.setItem('bmr', bmrValue);
sessionStorage.setItem('tdee', tdeeValue);
sessionStorage.setItem('carbsCal', carbCalValue);
sessionStorage.setItem('carbGram', carbGramValue);
sessionStorage.setItem('fatCal', fatCalValue);
sessionStorage.setItem('fatGram', fatGramValue);
sessionStorage.setItem('proteinCal', proteinCalValue);
sessionStorage.setItem('proteinGram', proteinGramValue);

//REdirect to results.html
window.location.href = "results.html";

// save 
const bmrResult = sessionStorage.getItem('bmr');
const tdeeResult = sessionStorage.getItem('tdee');
const calVal = sessionStorage.getItem('calories');
const carbCalVal = sessionStorage.getItem('carbsCal');
const carbGramVal = sessionStorage.getItem('carbGram');
const fatCalVal = sessionStorage.getItem('fatCal');
const fatGramVal = sessionStorage.getItem('fatGram');
const proteinCalVal = sessionStorage.getItem('proteinCal');
const proteinGramVal = sessionStorage.getItem('proteinGram');

document.getElementById('bmr').textContent = bmrResult;
document.getElementById('tdee').textContent = tdeeResult;
document.getElementById('calories').textContent = calVal;
document.getElementById('carbsCal').textContent = carbCalVal;
document.getElementById('carbGram').textContent = carbGramVal;
document.getElementById('fatCal').textContent = fatCalVal;
document.getElementById('fatGram').textContent = fatGramVal;
document.getElementById('proteinCal').textContent = proteinCalVal;
document.getElementById('proteinGram').textContent = proteinGramVal;

}
});