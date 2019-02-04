function factorial(n){
    if (n === 1) return 1;
else return n*factorial(n-1);		
}

let userNum = +prompt('Введите число');
document.write(factorial(userNum));