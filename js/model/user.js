define('app/model/user', ['backbone', 'backbone.localstorage'], function() {
    return Backbone.Model.extend({
        //url: '/users',
        localStorage: new Backbone.LocalStorage("users"),

        defaults: {
            email: '',
            password: ''
        }
    });
});
