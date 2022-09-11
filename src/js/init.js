
function initCookie() {
    document.cookie = '{"theme": "white", "facc": []}'
    window.location.reload();
}

if (document.cookie === '') {
    initCookie()
}

let app = new Vue({
    el: '#app',
    data: {
        tooSmall: false,
        search: '',
        seen: false,
        select: -1,
        suggLen: 0,
        suggs: [],
        newsData: [],
        fav: [],
        darkTheme: true,
        faccess: []
    }
});
