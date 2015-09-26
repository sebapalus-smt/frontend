require(['app/model/user'], function(UserModel) {
    var $form = $('#registerForm');
    $form.on('submit', function() {
        var user = new UserModel({
            username: $('#username').val(),
            password: $('#password').val()
        });
        user.save()
            .done(function() {
                $form.find('input[type=text], input[type=password]').val('');
                alert('User created');
            })
            .fail(function(xhr, textStatus, error) {
                alert(error);
            });
        return false;
    });
});

