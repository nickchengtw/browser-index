
Vue.component('fav-site', {
    props: ['icon', 'text', 'url'],
    template:
        '<li>' +
        '   <a v-bind:href="url">' +
        '       <i v-bind:class="[\'fa\', icon]"></i><label>{{text}}</label>' +
        '   </a>' +
        '</li>'
});

// const favTemplate = document.querySelector('#fav-item');
// for (let i in fav) {
//     const favItem = fav[i];
//     let el = favTemplate.content.cloneNode(true);
//     el.querySelector('a').href = favItem.url;
//     el.querySelector('i').classList.add('material-icons');
//     el.querySelector('i').innerHTML = favItem.icon;
//     el.querySelector('lable').innerHTML = favItem.name;
//     console.log(favItem);
//     document.getElementById('fav-menu').appendChild(el);
// }
