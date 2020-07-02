const exec = require("child_process").exec,
    WatchService = require("./watch-service").WatchService,
    DockerSyncService = require("./docker-sync-service");

var watcher = new WatchService().start();
new DockerSyncService(watcher).start();

process.on("SIGTERM", () => {
    exec("pkill -9 -f jekyll", (error, stdout, stderr) => {
        watcher.stop();
    });
});
