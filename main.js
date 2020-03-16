console.log('siema');
const name = 'Łukasz';
const age = 71;
console.log (name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);
console.log("Witaj Świecie");

const about = document.querySelector('.about__paragraph--js');
console.log(about);
console.log(about.innerHTML);
about.innerHTML = 'nowy tekst'

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);

const about2 = document.querySelector('.about__paragraph--js2');
console.log(about2.innerHTML);
about2.innerHTML = 'Zupełnie nowy tekst'

if ('java script' != 'java'){
    console.log('to prawda');
}

if  (age > 20){
    console.log('masz więcej niż 20 lat');
}else{
    console.log('masz mniej niż 20 lat');
}

if  (age < 20){
    console.log('masz mniej niż 20 lat');
}else if (age >= 20 && age <= 30){
    console.log('masz więcej niż 20 lat ale mniej niż 30');
} else {
    console.log('masz więcej niż 30 lat')
}


switch (age){
    case 10:
    console.log('masz 10 lat');
    break;
    case 20:
    console.log('masz 20 lat');
    break;
    case 30:
    console.log('masz 30 lat');
    break;
    default:
    console.log('masz inny wiek');
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

Funkcje: 

function calculate (x){
    x = x + 3;
    console.log(`normal: ${x}`);
    return x*7;
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

const calculateFat = (x) => {
    x = x + 3;
    console.log(`fat: ${x}`);
    return x*7;  
}
console.log(calculateFat(5));

const calculateFat2 = x => (`proste ${(x+3)*7}`);
console.log(calculateFat2(5));