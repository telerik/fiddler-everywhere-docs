module.exports.Logger = class Logger {
    info(message) {
        console.log(`[${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}]: ${message}` );
    }
}
