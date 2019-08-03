const userController = function () {
    const getLogin = function (context) {
        context.loadPartials({
            header: "../Templates/header.hbs",
            footer: "../Templates/footer.hbs"
        }).then(function () {
            this.partial("../Templates/signInForm.hbs");
        });
    };

    const postLogin = function (context) {
        const url = `/user/${storage.appKey}/login`;
        const authType = 'Basic';
        const data = {...context.params}

        requester.post(url, authType, data)
            .then(helper.handler)
            .then(data => {
                storage.saveUser(data);
                context.redirect('#/home');
            });
    };

    const getRegister = function (context) {
        context.loadPartials({
            header: "../Templates/header.hbs",
            footer: "../Templates/footer.hbs"
        }).then(function () {
            this.partial("../Templates/signUpForm.hbs");
        });
    };

    const postRegister = function (context) {
        const url = `/user/${storage.appKey}`;
        const authType = 'Basic'

        const data = {
            username: context.params.username,
            password: context.params.password
        }

        requester.post(url, authType, data)
            .then(helper.handler)
            .then(data => {
                storage.saveUser(data);
                context.redirect('#/home');
            });
    };

    const postLogout = function(context) {
        const url = `/user/${storage.appKey}/_logout`;
        const authorizationType = 'Kinvey';

        requester
            .post(url, authorizationType)
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                context.redirect('#/home');
            });
    };

    return {
        getLogin,
        postLogin,
        getRegister,
        postRegister,
        postLogout
    }
}();
