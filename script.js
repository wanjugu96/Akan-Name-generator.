console.log('working')

function namefunction() { //onclick
    const from = document.querySelector('form[name="name_generator"]')
    const day = form.elements['birth_day'].value;
    console.log(day)
}

function day_generator(day_of_month, year, month, gender) { //day generator
    let day_of_week;
    let century = Math.floor(year / 100);
    let yr_suffix = year % 100
        //let day_of_month;

    day_of_week = (((century / 4) - 2 * century - 1) + ((5 * yr_suffix / 4)) + ((26 * (month + 1) / 10)) + day_of_month) % 7
    return Math.floor(day_of_week);
}
let male_arr = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
let female_arr = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    //day_generator(25,1996,9);

let result = day_generator(25, 1996, 9, 'female');

console.log(`day of the week is ${result}`)
let gender = 'female'
let name;
if (gender === 'female') {
    name = female_arr[result];
} else {
    name = male_arr[result]
}
console.log(` name is ${name}`)