import { exec, execSync } from "child_process";

export type DisplayState = "on" | "off";

abstract class Visual {
  static getDisplayState(): DisplayState {
    const result = execSync("xset q").toString();
    if (result.includes("Monitor is On")) return "on";
    if (result.includes("Monitor is Off")) return "off";
    throw new Error("unable to get display state");
  }

  static setDisplayState(state: DisplayState, display = ":0") {
    execSync(`DISPLAY=${display} xset dpms force ${state}`);
  }
}

export default Visual;
