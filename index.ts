'use strict';

import { stdout } from 'process';
import { platform } from 'os';

const BEEP = new Buffer([0o7]);

module.exports = class WebpackErrorBeepPlugin {

    private beepWarning = false;

    constructor(options?: { beepWarning?: boolean }) {

        if (!options) {
            return;
        }

        this.beepWarning = options.beepWarning;
    }

    private done(stats) {

        if (stats.hasErrors()) {
            this.beep();
        }

        if (this.beepWarning && stats.hasWarnings()) {
            this.beep();
        }
    }

    private beep() {

        stdout.write(BEEP);
    }

    public apply(compiler) {

        compiler.plugin('done', (stats) => this.done(stats));
    }
}
