"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Visual {
    static turnOn() {
        (0, child_process_1.exec)("xset dpms force on");
    }
    static turnOff() {
        (0, child_process_1.exec)("xset dpms force off");
    }
}
exports.default = Visual;
