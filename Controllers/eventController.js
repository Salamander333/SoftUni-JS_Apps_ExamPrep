const eventController = function() {
    const getEventCreate = function(context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: "../Templates/header.hbs",
            footer: "../Templates/footer.hbs"
        }).then(function() {
            this.partial("../Templates/createEventForm.hbs");
        });
    };

    return {
        getEventCreate,
    }
}();