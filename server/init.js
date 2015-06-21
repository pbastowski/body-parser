var bodyParser = Npm.require("body-parser");

WebApp.connectHandlers
    .use(bodyParser.urlencoded())
    .use(bodyParser.json())
;
