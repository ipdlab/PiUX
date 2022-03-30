"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Visual {
    /**
     * Get the display state (DisplayState)
     * @returns "on" or "off"
     */
    static getDisplayState() {
        const result = (0, child_process_1.execSync)("xset q").toString();
        if (result.includes("Monitor is On"))
            return "on";
        if (result.includes("Monitor is Off"))
            return "off";
        throw new Error("unable to get display state");
    }
    /**
     * Set the display state (DisplayState)
     * @param state "on" or "off"
     * @param display X11 DISPLAY (":0" by default)
     */
    static setDisplayState(state, display = ":0") {
        (0, child_process_1.exec)(`DISPLAY=${display} xset dpms force ${state}`);
    }
}
exports.default = Visual;
