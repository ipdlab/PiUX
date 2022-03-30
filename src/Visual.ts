import { exec, execSync } from "child_process";

export type DisplayState = "on" | "off";

abstract class Visual {
  /**
   * Get the display state (DisplayState)
   * @returns "on" or "off"
   */
  static getDisplayState(): DisplayState {
    const result = execSync("xset q").toString();
    if (result.includes("Monitor is On")) return "on";
    if (result.includes("Monitor is Off")) return "off";
    throw new Error("unable to get display state");
  }

  /**
   * Set the display state (DisplayState)
   * @param state "on" or "off"
   * @param display X11 DISPLAY (":0" by default)
   */
  static setDisplayState(state: DisplayState, display = ":0") {
    exec(`DISPLAY=${display} xset dpms force ${state}`);
  }
}

export default Visual;
