
var Presenter = {   

    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },

    defaultPresenter: function(xml) {
        if(this.loadingIndicatorVisible) {
            navigationDocument.replaceDocument(xml, this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        } else {
            navigationDocument.pushDocument(xml);
        }
    },    

    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },

    pushDocument: function(xml) {
        navigationDocument.pushDocument(xml);
    },

    load: function(event) {
        console.log(event);

        var self = this,
            ele = event.target,
            templateURL = ele.getAttribute("template"),
            presentation = ele.getAttribute("presentation");

        if (templateURL) {

            self.showLoadingIndicator(presentation);

            resourceLoader.loadResource(templateURL,
                function(resource) {
                    if (resource) {
                        var doc = self.makeDocument(resource);

                        doc.addEventListener("select", self.load.bind(self));
                        doc.addEventListener("highlight", self.load.bind(self));

                        if (self[presentation] instanceof Function) {
                            self[presentation].call(self, doc, ele);
                        } else {
                            self.defaultPresenter.call(self, doc);
                        }
                    }
                }
            );
        }
    },

    showLoadingIndicator: function(presentation) {
        if (!this.loadingIndicator) {
            this.loadingIndicator = this.makeDocument(this.loadingTemplate);
        }
        
        if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter") {
            navigationDocument.pushDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = true;
        }
    },  

    removeLoadingIndicator: function() {
        if (this.loadingIndicatorVisible) {
            navigationDocument.removeDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        }
    },

    loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>正在加载...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`    
}
