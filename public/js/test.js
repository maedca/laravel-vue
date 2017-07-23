var urlUsers = 'users';
new Vue({
    el: '#main',
    created: function () {
        this.getUsers();
    },
    data: {
        lists: []
    },
    methods: {
        getUsers: function () {
//                this.$http.get(urlUsers).then(function (response) {
//                    console.log(response);
//                    this.lists = response.data;
            axios.get(urlUsers).then(response => {this.lists = response.data});
        }
    }


});