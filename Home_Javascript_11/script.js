let listLength = prompt("Какова длинна списка");
let listUl = document.getElementById('list');
let timeTillShutdown = document.getElementById('timer');
let liArray = [];

timeTillShutdown.innerHTML = "10";

for (let i = 0; i < listLength; i++) {
    let listContent = prompt("Введите елемент списка");
    liArray.push(listContent);
}

liList = liArray.map(function (item) {
    return `<li>${item}</li>`;
});

listUl.innerHTML = liList.join("");

let watch = setInterval(function () {
    let times = +timeTillShutdown.innerHTML;
    times--;
    if (!times) {
        clearInterval(watch);
        document.write('');
    }
    else {
        timeTillShutdown.innerHTML = times;
    }
}, 1000);
