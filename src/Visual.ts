import { exec } from "child_process";

export type DisplayState = "on" | "off";

abstract class Visual {
  static setDisplayState(state: DisplayState, display = ":0") {
    exec(`DISPLAY=${display} xset dpms force ${state}`);
  }
}

export default Visual;
