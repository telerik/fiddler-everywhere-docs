var exec = require("child_process").exec,
    path = require("path"),
    config = require("./config"),
    Logger = require("./logger").Logger;

module.exports = class DockerSyncService {
    constructor(watchService) {
        this.watchService = watchService;
        this.logger = new Logger();
    }

    start() {
        if (!this.watchService.watching) {
            setTimeout(() => this.start(), 2000);
            return;
        }

        this.watchService.on('changed', f => this.onChanged(f));
        this.watchService.on('removed', f => this.onRemoved(f));

        return this;
    }

    onChanged(file) {
        let cmd = `docker cp "${file}" "${config.dockerName}:${config.dockerRoot}/${this.toPosixPath(file)}"`;
        this.execute(cmd);
    }

    onRemoved(file) {
        let cmd = `docker exec ${config.dockerName} rm -rf "${file}"`;
        this.execute(cmd);
    }

    execute(cmd) {
        this.watchService.suspend();

        let proc = exec(cmd, { cwd: config.root }, (error, stdout, stderr) => {
            if (error) {
                this.logger.info(`Execution of '${cmd}' failed: ${error}`);
            } else {
                this.logger.info(`Synchronization successfully completed`);
            }

            this.watchService.resume();
        });
        
        proc.stdout.on("data", data => this.logger.info(data.toString()));
        proc.stderr.on("data", data => this.logger.info(data.toString()));
    }

    toPosixPath(f) {
        return f.replace(new RegExp('\\' + path.sep, 'g'), '/');
    }
};
