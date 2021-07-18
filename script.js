console.log('working')

//day generator function
function day_generator(day_of_month, year, month) {
    let day_of_week;
    let century = Math.floor(year / 100);
    let yr_suffix = year % 100
        //let day_of_month;

    day_of_week = (((century / 4) - 2 * century - 1) + ((5 * yr_suffix / 4)) + ((26 * (month + 1) / 10)) + day_of_month) % 7
        //( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    return Math.floor(day_of_week);
}

//Name generator functiom
function name_generator(day, gender) {
    let male_arr = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    let female_arr = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
        //day_generator(25,1996,9);

    //let result = day_generator(25, 1996, 9, 'female');

    //console.log(`day of the week is ${result}`)
    //let gender = 'female'
    let name;
    if (day === 7) {
        day = 0
    }
    if (gender === 'female') {
        name = female_arr[day];
    } else {
        name = male_arr[day]
    }
    console.log(` name is ${name}`)
    return name;
}

function namefunction() { //onclick
    const form = document.querySelector('form[name="name_generator"]')
    const day_of_month = form.elements['birth_day'].value;
    const month = form.elements['birth_month'].value;
    const year = form.elements['birth_year'].value;
    const gender = form.elements['gender'].value;
    console.log(day_of_month)
    console.log(month)
    console.log(year)
    console.log(gender)

    if (day_of_month <= 0 || day_of_month > 31) {
        alert('please enter valid day of birth');
    } else if (month <= 0 || month > 12) {
        alert('please enter valid month')
    }

    let day = day_generator(day_of_month, month, year);
    let akan_name = name_generator(day, gender);
    console.log(`akan name is ${akan_name}`)
    console.log(`you were born on the : ${day}`)

    document.getElementById("day").innerHTML = day;
    document.getElementById("name").innerHTML = akan_name;

    console.log(Math.ceil(day))
    console.log(Math.floor(day))
}