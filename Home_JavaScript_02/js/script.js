let userNumber = prompt('enter num');
prime:
	for (let i = 2; i <= userNumber; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) continue prime;
		}
        console.log(" " + i);
	}
