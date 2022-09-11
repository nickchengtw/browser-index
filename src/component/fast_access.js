
Vue.component('fast-access', {
    props: ['type', 'name', 'url'],
    template:
        '<li>' +
        '   <button v-if="type !== \'fix\'" class="uk-button faccess-button" v-on:click="rmFaccess(name)"' +
        '   ><i class="fa fa-minus"></i></button><div v-bind:class="{unfix: (type !== \'fix\')}">' +
        '       <p class="faccess-name">{{name}}</p><p class="faccess-url">{{url}}</p>' +
        '   </div><button class="uk-button faccess-button" v-on:click="visit(url)"><i class="fa fa-arrow-right"></i></button>' +
        '</li>',
    methods: {
        visit: function (url) {
            window.location.href = url;
        },
        rmFaccess: function (name) {
            const cookie = JSON.parse(document.cookie);
            let fastAccessList = cookie.facc;
            for (let i in fastAccessList) {
                const data = fastAccessList[i];
                if (data.name === name) {
                    fastAccessList.splice(i, 1);
                    console.log(fastAccessList);
                    cookie.facc = fastAccessList;
                    document.cookie = JSON.stringify(cookie);
                    window.location.reload();
                }
            }
        }
    }
});
