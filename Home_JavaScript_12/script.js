function createInput() {
    let inputCircleButton = document.getElementById('btn');
    
    let radius = document.createElement('input');
    let color = document.createElement('input');
    let drawCircleButton = document.createElement('input');
    let draw_100_CircleButton = document.createElement('input');

    radius.setAttribute('id', 'radius');
    radius.setAttribute('placeholder', 'radius');

    color.setAttribute('id', 'color');
    color.setAttribute('placeholder', 'color (for DRAW ONE only)');

    drawCircleButton.setAttribute('value', 'Draw one');
    drawCircleButton.setAttribute('type', 'button');
    drawCircleButton.setAttribute('onclick', 'draw_circle()');

    draw_100_CircleButton.setAttribute('value', 'Draw 100');
    draw_100_CircleButton.setAttribute('type', 'button');
    draw_100_CircleButton.setAttribute('onclick', 'draw_100_circles()');

    document.body.removeChild(inputCircleButton);
    
    document.body.appendChild(radius);
    document.body.appendChild(color);
    document.body.appendChild(drawCircleButton);
    document.body.appendChild(draw_100_CircleButton);
};

function draw_circle() {
    let circle = document.createElement('div');
    let circleRadius = +document.getElementById('radius').value;
    let circleColor = document.getElementById('color').value;

    circle.style.borderRadius = '50%';
    circle.style.width = circleRadius + 'px';
    circle.style.height = circleRadius + 'px';
    circle.style.backgroundColor = circleColor;

    document.body.appendChild(circle);
}

function draw_100_circles() {
    let br = document.createElement('br');
    document.body.appendChild(br);
    
    for (let index = 0; index < 10; index++) {
        let br = document.createElement('br');
        
        for (let index = 0; index < 10; index++) {
            
            let circle = document.createElement('div');
            let circleRadius = +document.getElementById('radius').value;

            circle.style.borderRadius = '50%';
            circle.style.width = circleRadius + 'px';
            circle.style.height = circleRadius + 'px';
            circle.style.backgroundColor = getRandomColor();
            circle.style.display = 'inline-block';
            circle.setAttribute('class', 'circle');

            document.body.appendChild(circle);
        }
        document.body.appendChild(br);
    }
  }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.body.onclick = (event) => {
    let targ = event.target;
    if (targ.classList.contains("circle")) {
        targ.remove();
        
        //Удалить все:
        
        // var elements = document.getElementsByClassName('circle');
        // var lines = document.getElementsByTagName('br');
        // while (elements.length > 0) {
        //     elements[0].parentNode.removeChild(elements[0]);
        // }
        // while (lines.length > 0) {
        //     lines[0].parentNode.removeChild(lines[0]);
        // }
    }
}