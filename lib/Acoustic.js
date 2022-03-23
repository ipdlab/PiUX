"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("./util");
class Acoustic {
    /**
     * Get the master sound volume (percentage)
     * @returns an integer in range of 0-100
     */
    static getSoundVolume() {
        const buffer = (0, child_process_1.execSync)(`amixer sget Master`);
        const match = (0, util_1.PatternParser)(buffer, /Front Left: Playback \d+ \[(\d+)%\])/);
        if (!match) {
            throw new Error("failed to get sound volume");
        }
        return Number.parseInt(match[1]);
    }
    /**
     * Set the master sound volume (percentage)
     * @param volume an integer in range of 0-100
     */
    static setSoundVolume(volume) {
        if (!Number.isInteger(volume) && volume >= 0 && volume <= 100) {
            throw new Error("invalid sound volume");
        }
        (0, child_process_1.exec)(`amixer -q sset Master ${volume}%`);
    }
}
exports.default = Acoustic;
