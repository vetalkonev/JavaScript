document.getElementById("birthdayDate").defaultValue = "1986-08-13";
document.getElementById("birthdayDate").addEventListener("change", checkZodiac);

let zod_signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
let east_zod_signs = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];

function checkZodiac() {
    let birthday = new Date(this.value);
    let today = new Date();

    let age = getAge(today, birthday);
    getZodiac(birthday);
    let eastZodiac = getEastZodiac(birthday);

    let li_age = document.getElementById('age');
    li_age.innerHTML = `Ваш возраст: ${age}`;

    let li_zodiac = document.getElementById('zodiac');
    li_zodiac.innerHTML = `Ваш знак зодиака: ${zodiacSign}`;

    let li_eastZodiac = document.getElementById('eastZodiac');
    li_eastZodiac.innerHTML = `Ваш восточный знак: ${eastZodiac}`;
}

function getEastZodiac(birthday) {
    let eastZodiacSign = east_zod_signs[birthday.getFullYear() % 12];
    return eastZodiacSign;
}

function getAge(today, birthday) {
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

function getZodiac(birthday) {
    let month = birthday.getMonth();
    let day = birthday.getDate();
    switch (month) {
        case 0: {
            if (day < 20) zodiacSign = zod_signs[0];
            else zodiacSign = zod_signs[1];
        }
            break;
        case 1: {
            if (day < 19) zodiacSign = zod_signs[1];
            else zodiacSign = zod_signs[2];
        }
            break;
        case 2: {
            if (day < 21) zodiacSign = zod_signs[2];
            else zodiacSign = zod_signs[3];
        }
            break;
        case 3: {
            if (day < 20) zodiacSign = zod_signs[3];
            else zodiacSign = zod_signs[4];
        }
            break;
        case 4: {
            if (day < 21) zodiacSign = zod_signs[4];
            else zodiacSign = zod_signs[5];
        }
            break;
        case 5: {
            if (day < 21) zodiacSign = zod_signs[5];
            else zodiacSign = zod_signs[6];
        }
            break;
        case 6: {
            if (day < 23) zodiacSign = zod_signs[6];
            else zodiacSign = zod_signs[7];
        }
            break;
        case 7: {
            if (day < 23) zodiacSign = zod_signs[7];
            else zodiacSign = zod_signs[8];
        }
            break;
        case 8: {
            if (day < 23) zodiacSign = zod_signs[8];
            else zodiacSign = zod_signs[9];
        }
            break;
        case 9: {
            if (day < 23) zodiacSign = zod_signs[9];
            else zodiacSign = zod_signs[10];
        }
            break;
        case 10: {
            if (day < 22) zodiacSign = zod_signs[10];
            else zodiacSign = zod_signs[11];
        }
            break;
        case 11: {
            if (day < 22) zodiacSign = zod_signs[11];
            else zodiacSign = zod_signs[0];
        }
            break;
    }
}
