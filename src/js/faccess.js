
const faccessList = app.faccess.concat(JSON.parse(document.cookie).facc);
app.faccess = faccessList;

function addFaccSite() {
    const name = document.getElementById('facc-name').value;
    const url= document.getElementById('facc-url').value;
    let cookie = JSON.parse(document.cookie);
    let facc = cookie.facc;
    if ((name !== '') && (url !== '')) {
        facc.push({type: 'free', name: name, url: url});
        cookie.facc = facc;
        document.cookie = JSON.stringify(cookie)
    }
    window.location.reload()
}
