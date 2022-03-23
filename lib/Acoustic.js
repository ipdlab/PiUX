"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Acoustic {
    /**
     * Set the master volume
     * @param volume 0-100 percentage with only integer
     */
    static setSoundVolume(volume) {
        if (!Number.isInteger(volume) && volume >= 0 && volume <= 100) {
            throw new Error("invalid volume");
        }
        (0, child_process_1.exec)(`amixer -q sset Master ${volume}%`);
    }
}
exports.default = Acoustic;
