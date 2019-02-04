let name = prompt('Enter your name', 'name');
let age = prompt('Enter your age', 'age');


if (age < 18) {
    alert('You are not allowed to visit this website');
} else if (age >= 18 && age <= 22) {
    if (confirm("Are you sure you want to continue?")) {
        alert("Welcome, " + name);
    } else {
        alert("You are not allowed to visit this website");
    }
} else {
    alert('Welcome, ' + name);
}

if (isNaN(age) === true) {
    alert('Число в неправильном формате!');
    prompt("Введит число в правильном фромате", age);
} else {
    alert("Возраст правильно");
}

if (isNaN(name) === false) {
    alert('Имя в неправильном формате!');
    prompt("Введит имя в правильном фромате", name);
} else {
    alert("Имя правильно");
}
