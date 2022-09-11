
let cookie = JSON.parse(document.cookie);

if (cookie.theme === 'white') {
    app.darkTheme = false;
    document.styleSheets[1].disabled = true
}

function switchTheme(el) {
    let stylesheet = document.styleSheets[1];
    stylesheet.disabled = !el.checked;
    cookie.theme = (el.checked ? 'dark' : 'white');
    app.darkTheme = el.checked;
    document.cookie = JSON.stringify(cookie)
}
