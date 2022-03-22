"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Visual {
    static setDisplayState(state, display = ":0") {
        (0, child_process_1.exec)(`DISPLAY=${display} xset dpms force ${state}`);
    }
}
exports.default = Visual;
