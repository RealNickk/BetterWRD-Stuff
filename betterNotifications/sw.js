self.addEventListener("notificationclick", (event) => {
    if (event.notification.tag == "confirm") {
        event.notification.close();
        self.clients.matchAll({
            includeUncontrolled: true,
            type: 'window',
        }).then((clients) => {
            if (clients && clients.length) {
                clients.forEach((client) => {
                    client.postMessage("confirmed");
                });
            }
        });
    }
});
