const eventController = function () {
    const getEventCreate = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: "../Templates/header.hbs",
            footer: "../Templates/footer.hbs"
        }).then(function () {
            this.partial("../Templates/createEventForm.hbs");
        });
    };

    const postEventCreate = function (context) {
        const url = `/appdata/${storage.appKey}/events`;
        const authType = 'Kinvey';

        const data = {
            ...context.params,
            organizer: JSON.parse(storage.getData('userInfo')).username,
            peopleInterested: 0
        }
        console.log('here')
        requester.post(url, authType, data)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            });
    }

    return {
        getEventCreate,
        postEventCreate
    }
}();