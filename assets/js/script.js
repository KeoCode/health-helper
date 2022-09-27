let form = document.getElementById('form');


//Form Event Listener
form.addEventListener('submit', function (event) {
    event.preventDefault();

    //Get form values
    const gender = event.target.gender.value;
    const weight = Number(event.target.weight.value);
    const height = Number(event.target.height.value);
    const age = Number(event.target.age.value);
    const activityLevel = event.target.activity.value;
    const goal = event.target.goal.value;

    // call function
    calTdee();

    function calTdee() {

        //declare variables
        let bmr = 0;
        let tdee = 0;
        let calories = 0;

        //Calculate Basal metabolic Rate (BMR) by determining if it is female or male and calculating accordingly.
        let bmrMap = {
            "female": 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age),
            "male": 66 + (13.7 * weight) + (5 * height) - (6.8 * age),
        };

        bmr = bmrMap[gender];

        console.log(bmr);

        //Get TDEE (Total Daily Energy Expenditure), BMR times activity level
        let tdeeMap = {
            "sedentary": bmr * 1.2,
            "lightly-active": bmr * 1.375,
            "moderately-active": bmr * 1.55,
            "very-active": bmr * 1.725,
            "extremely-activity": bmr * 1.9,
        };

        tdee = tdeeMap[activityLevel];


        console.log(parseInt(tdee));

        // work out calories for each goal
        let calorieMap = {
            "loseOne": tdee - 500,
            "loseTwo": tdee - 1000,
            "gain": tdee + 300,
            "maintain": tdee,
        };

        calories = calorieMap[goal];

        // Workout calories and grams for macros
        let carbsCal = calories * 0.3;
        let carbGram = carbsCal / 4;

        let fatCal = calories * 0.3;
        let fatGram = carbsCal / 9;

        let proteinCal = calories * 0.4;
        let proteinGram = carbsCal / 4;

        //Ensure the results are intgers
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
    }

    //Redirect to results.html
    window.location.href = "results.html";

});