

document.getElementById("changeThemeBTN").addEventListener("click", changeTheme);
document.getElementById("theme").href = `${localStorage.activeTheme}`;

if (localStorage.activeTheme == undefined) {
      localStorage.setItem('activeTheme', 'css/style.css');
}

function changeTheme() {
    let themeCSS = document.getElementById("theme");
    switch (localStorage.activeTheme) {
        case 'css/style.css':
        localStorage.setItem('activeTheme', 'css/style-hot.css')
        themeCSS.href = localStorage.activeTheme;
        break;
        case 'css/style-hot.css':
        localStorage.setItem('activeTheme', 'css/style.css')
        themeCSS.href = localStorage.activeTheme;
        break;
    }
}

if (2 + 2 === 4) {
    console.log("Hurray!")
}