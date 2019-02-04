function timer(param) {
    return document.getElementById(param);
};

var clock = {
    active: false,
    duration: 0
};

function restart() {
    clock.active = false;
    clock.duration = 0;
  
    timer("clock").innerHTML = "00:00.0";
    timer("play").innerHTML = '<i class="fas fa-play"></i>';
};

function startButton() {
    if (clock.active === false) {
        clock.active = true;
        run();
        timer("play").innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        clock.active = false;
        timer("play").innerHTML = '<i class="fas fa-play"></i>';
    }
};

function run() {
    if (clock.active === true) {
        setTimeout(function () {
            let decimal = clock.duration % 10;
            let seconds = Math.floor(clock.duration / 10 % 60);
            let minutes = Math.floor(clock.duration / 11 / 60);
            clock.duration++;

            if (seconds < 10) seconds = "0" + seconds;
            if (minutes < 10) minutes = "0" + minutes;

            timer("clock").innerHTML = minutes + ":" + seconds + "." + decimal;
            run();
        }, 100);
    }
};
console.log(clock)
//TODO: циферблатец