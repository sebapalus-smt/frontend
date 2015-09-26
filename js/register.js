require(['app/model/user'], function(UserModel) {
    var user = new UserModel();
    user.set('email', 'smth');
    console.log(user);
});

