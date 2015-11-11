
function ResourceLoader(baseurl) {
    if (!baseurl) {
        throw("ResourceLoader: baseurl is required.");
    }

    this.BASEURL = baseurl;
}

ResourceLoader.prototype.loadResource = function(resource, callback) {
    var self = this;

    evaluateScripts([resource], function(success) {
        if (success) {
            var resource = Template.call(self);
            callback.call(self, resource);
        } else {
            var title = "Resource Loader Error",
                description = `There was an error attempting to load the resource '${resource}'. \n\n Please try again later.`,
                alert = createAlert(title, description);

            Presenter.removeLoadingIndicator();
            
            navigationDocument.presentModal(alert);
        }
    });
}
