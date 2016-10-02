var bodyParser = Npm.require("body-parser");

WebApp.connectHandlers
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
;
