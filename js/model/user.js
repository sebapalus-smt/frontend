define('app/model/user', ['backbone'], function() {
    return Backbone.Model.extend({
        url: '/users',

        defaults: {
            email: '',
            password: ''
        }
    });
});
