require(['app/model/user'], function(UserModel) {
    var $form = $('#loginForm');
    $form.on('submit', function() {
        var user = new UserModel({
            username: $('#username').val(),
        });
        user.fetch()
            .done(function() {
                if (user.get('password') == $('#password').val()) {
                    alert('Successful login!');
                } else {
                    alert("can't login, wrong data!");
                }
            })
            .fail(function() {
                alert("can't login, wrong data!");
            });
        return false;
    });
});

