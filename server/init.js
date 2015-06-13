if (!Meteor.require)
    Meteor.require = Npm.require;

var bodyParser = Npm.require("urlencoded-request-parser")();

WebApp.connectHandlers.use(bodyParser);
