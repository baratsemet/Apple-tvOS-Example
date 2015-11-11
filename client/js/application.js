
var resourceLoader;


App.onLaunch = function(options) {
    console.log('App started');

    var javascriptFiles = [
        `${options.BASEURL}js/ResourceLoader.js`,
        `${options.BASEURL}js/Presenter.js`
    ];
  
    evaluateScripts(javascriptFiles, function(success) {
        if(success) {
            resourceLoader = new ResourceLoader(options.BASEURL);
                resourceLoader.loadResource(`${options.BASEURL}templates/UpdateNotifyTemplate.xml.js`, function(resource) {
                var doc = Presenter.makeDocument(resource);
                doc.addEventListener("select", Presenter.load.bind(Presenter));
                Presenter.defaultPresenter(doc);
            });
        } else {
            //error
        }
    });
}

App.onExit = function() {
    console.log('App finished');
}
