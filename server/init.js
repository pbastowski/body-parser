var bodyParser = Npm.require("urlencoded-request-parser")();

WebApp.connectHandlers.use(bodyParser);
