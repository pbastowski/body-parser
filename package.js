Package.describe({
    name:          'pbastowski:body-parser',
    version:       '0.0.4',
    summary:       "Adds a POST body-parser middleware to Meteor's internal WebApp server",
    git:           'https://github.com/pbastowski/body-parser',
    documentation: 'README.md'
});

var npmDeps = {
    "body-parser":               "1.15.2"
};

Npm.depends(npmDeps);

Package.onUse(function (api) {

    api.versionsFrom('1.1.0.2');
    api.use(['meteor', 'webapp'], 'server');
    api.add_files('server/init.js', 'server');
});

