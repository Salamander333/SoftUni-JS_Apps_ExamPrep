const app = Sammy('#main', function(){
    this.use('Handlebars', 'hbs');

    this.get('/', homeController.getHome);
    this.get('#/home', homeController.getHome);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/logout', userController.postLogout);

    this.get('#/createEvent', eventController.getEventCreate);
    this.post('#/createEvent', eventController.postEventCreate);
});

(() => {
    app.run('#/home');
})();