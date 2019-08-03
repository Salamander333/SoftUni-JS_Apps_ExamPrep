const homeController = function () {
    const getHome = function (context) {
        helper.addHeaderInfo(context);

        if (context.loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;

            const url = `/appdata/${storage.appKey}/events`;
            const authorizationType = 'Kinvey';

            requester.get(url, authorizationType)
                .then(response => response.json())
                .then(events => {
                    context.events = events;
                });
        }

        context.loadPartials({
            header: "../Templates/header.hbs",
            footer: "../Templates/footer.hbs",
            event: "../Templates/event.hbs",
            noEvents: "../Templates/noEvents.hbs"
        }).then(function () {
            this.partial("../Templates/home.hbs");
        });
    };

    return {
        getHome
    }
}();
