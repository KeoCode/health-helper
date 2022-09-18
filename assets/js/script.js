let gender = document.getElementById('gender').value;
let weight = document.getElementById('weight').value;
let height = document.getElementById('height').value;
let age = document.getElementById('age').value;
let activityLevel = document.getElementById('activity-level').value;
let goal = document.getElementById('goal').value;

let bmr, tdee;

addEventListener

function calBmr() {
    if (gender === female) {
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
      } else {
         bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
      }
      console.log(bmr);
    }
    
    function calTdee() {
        tdee = bmr * 1.55;
    }
    
   function calLossOne() {
    let loseOne = tdee - 500;
    let carbsLoseOne   = (loseOne * 0.3) / 4;
    let fatLoseOne = (loseOne * 0.3) / 9;
    let protienLoseOne = (loseOne * 0.4) /4;
    console.log(loseOne);
    console.log(carbsLoseOne);
    console.log(fatLoseOne);
    console.log(protienLoseOne);
    }
    
    function calLossTwo() { 
        LoseTwo= tdee - 1000;
        carbsLoseTwo   = (loseTwo * 0.3)
        console.log(loseTwo);
        console.log(carbsLoseTwo);
    }
    
    function gain() {
        gain =tdee + 500;
    }

function maintain() {

    console.log(tdee);
}

function calTEF() {

}

function calNEAT() {

}

function calTEA() {

}

console.log(resultsCAl);
console.log(resultsMacro);