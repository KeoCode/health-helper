// get values results for results page from session storage
const bmrResult = sessionStorage.getItem('bmr');
const tdeeResult = sessionStorage.getItem('tdee');
const calVal = sessionStorage.getItem('calories');
const carbCalVal = sessionStorage.getItem('carbsCal');
const carbGramVal = sessionStorage.getItem('carbGram');
const fatCalVal = sessionStorage.getItem('fatCal');
const fatGramVal = sessionStorage.getItem('fatGram');
const proteinCalVal = sessionStorage.getItem('proteinCal');
const proteinGramVal = sessionStorage.getItem('proteinGram');

document.getElementById('bmr').innerHTML = bmrResult;
document.getElementById('tdee').innerHTML = tdeeResult;
document.getElementById('calories').innerHTML = calVal;
document.getElementById('carbsCal').innerHTML = carbCalVal;
document.getElementById('carbGram').innerHTML = carbGramVal;
document.getElementById('fatCal').innerHTML = fatCalVal;
document.getElementById('fatGram').innerHTML = fatGramVal;
document.getElementById('proteinCal').innerHTML = proteinCalVal;
document.getElementById('proteinGram').innerHTML = proteinGramVal;