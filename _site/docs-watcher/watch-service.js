const chokidar = require("chokidar"),
    config = require("./config"),
    path = require("path"),
    EventEmitter = require("events"),
    Logger = require("./logger").Logger;

module.exports.WatchService = class WatchService extends EventEmitter {
    constructor() {
        super();
        this.logger = new Logger();
        this.suspendResumeCounter = 0;
    }

    get watching() {
        return this.watcher != null && 
               this.suspendResumeCounter === 0;
    }

    start() {
        if (!this.watcher) {
            var chokidarOptions = {
                persistent: true,
                ignoreInitial: true,
                ignored: config.ignoredFolders
            };

            this.watcher = chokidar.watch(config.root, chokidarOptions);
            this.watcher.on("add", f => this.changed(f))
                .on("change", f => this.changed(f))
                .on("unlink", f => this.removed(f))
                .on("error", error => this.logger.info("Error", error));
        }
        
        this.logger.info('Watching started');
        return this;
    }

    stop() {
        if (this.watcher) {
            this.watcher.close();
            this.watcher = null;
            this.logger.info('Watching stopped');
        }
    }

    suspend() {
        this.suspendResumeCounter++;
    }

    resume() {
        this.suspendResumeCounter--;
    }

    changed(f) {
        if (!this.watching) {
            return;
        }
        
        this.emit('changed', this.getRelativePath(f));
        this.logger.info(`File changed: ${path.relative(config.root, f)}`);
    }

    removed(f) {
        if (!this.watching) {
            return;
        }

        this.emit('removed', this.getRelativePath(f));
        this.logger.info(`File removed: ${path.relative(config.root, f)}`);
    }

    getRelativePath(f) {
        return path.relative(config.root, f);
    }
};
