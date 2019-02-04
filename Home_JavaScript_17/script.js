$(document).ready(() => {
    $("#create-circle").click(() => {
        $("#create-circle").remove();
        $("body").append("<input placeholder='enter diameter' id='diam'><input type='button' value='DRAW' id='btn'><br> ");
    })

    $("body").on("click", "#btn", () => {
        for (let i = 0; i < 10; i++) {
            for (let i = 0; i < 10; i++) {
                $("body").append(`<div class="circle" style="width: ${$("#diam").val()}px;height: ${$("#diam").val()}px;background-color:${getRandomColor()};border-radius: 50%; display: inline-block;"></div>`);
            }
            $("body").append("<br>");
        }
    });

    $("body").on("click", ".circle", (event) => {
        let targ = event.target;
        if (targ.classList.contains("circle")) {
            targ.remove();
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
