var form = document.getElementById('form');
    
 //Form Event Listener
  form.addEventListener('submit', function(event) {
    event.preventDefault();

 //Get form values
 
    var gender = document.querySelector('input[name="gender"]:checked').value;
var weight = parseFloat(document.getElementById('weight').value);
var height = parseFloat(document.getElementById('height').value);
var age = parseInt(document.getElementById('age').value);
var activityLevel = document.querySelector('input[name="activity-level"]:checked').value;
var goal = document.querySelector('input[name="goal"]:checked').value;

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

    if (gender === 'female') {
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
      } else {
         bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
      }
      console.log(bmr);
    


    //Get TDEE (Total Daily Energy Expenditure), BMr times activity level
    if (activityLevel == "sedentary") {
        tdee = bmr * 1.2;
    } else if (activityLevel === "lightly-active") {
        tdee = bmr * 1.375;
    } else if (activityLevel === "moderately-active") {
        tdee = bmr * 1.55;
    } else if (activityLevel === "very-active") {
        tdee = bmr * 1.725;
    } else (activityLevel === "extemely-active"); {
        tdee = bmr * 1.9;
    }
    console.log(parseInt(tdee));
}
  
    
    
   function calLossOne() {
    var loseOne = tdee - 500;
    var carbsLoseOne   = (loseOne * 0.3) / 4;
    var fatLoseOne = (loseOne * 0.3) / 9;
    var protienLoseOne = (loseOne * 0.4) /4;
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
  });
    
