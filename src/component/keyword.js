
Vue.component('keyword', {
    props: ['text'],
    template:
        '<li onclick="search(this)">{{text}}</li>'
});