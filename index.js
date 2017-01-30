'use strict';
var process_1 = require("process");
var BEEP = new Buffer([7]);
module.exports = (function () {
    function WebpackErrorBeepPlugin(options) {
        this.beepWarning = false;
        if (!options) {
            return;
        }
        this.beepWarning = options.beepWarning;
    }
    WebpackErrorBeepPlugin.prototype.done = function (stats) {
        if (stats.hasErrors()) {
            this.beep();
        }
        if (this.beepWarning && stats.hasWarnings()) {
            this.beep();
        }
    };
    WebpackErrorBeepPlugin.prototype.beep = function () {
        process_1.stdout.write(BEEP);
    };
    WebpackErrorBeepPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.plugin('done', function (stats) { return _this.done(stats); });
    };
    return WebpackErrorBeepPlugin;
}());
