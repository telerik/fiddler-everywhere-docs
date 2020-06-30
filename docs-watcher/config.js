const path = require('path');

module.exports.root = path.join(__dirname, "..");
module.exports.dockerRoot = "app_root";
module.exports.dockerName = "docs_site";

module.exports.ignoredFolders = [
    path.join(module.exports.root, "/docs-watcher/**"),
    path.join(module.exports.root, '/.gitignore'),
    path.join(module.exports.root, '/.*'),
    path.join(module.exports.root, '/*.sh'),
    path.join(module.exports.root, "**/.*/**"),
    path.join(module.exports.root, "**/node_modules/**"),
    path.join(module.exports.root, '/_site/**')
];
