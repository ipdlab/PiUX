"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Visual {
    static getDisplayState() {
        const result = (0, child_process_1.execSync)("xset q").toString();
        if (result.includes("Monitor is On"))
            return "on";
        if (result.includes("Monitor is Off"))
            return "off";
        throw new Error("unable to get display state");
    }
    static setDisplayState(state, display = ":0") {
        (0, child_process_1.execSync)(`DISPLAY=${display} xset dpms force ${state}`);
    }
}
exports.default = Visual;
