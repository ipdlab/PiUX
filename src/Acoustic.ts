import { exec, execSync } from "child_process";
import { PatternParser } from "./util";

abstract class Acoustic {
  /**
   * Get the master sound volume (percentage)
   * @returns an integer in range of 0-100
   */
  static getSoundVolume(): number {
    const buffer = execSync(`amixer sget Master`);
    const match = PatternParser(buffer, /Front Left: Playback \d+ \[(\d+)%\])/);
    if (!match) {
      throw new Error("failed to get sound volume");
    }
    return Number.parseInt(match[1]);
  }

  /**
   * Set the master sound volume (percentage)
   * @param volume an integer in range of 0-100
   */
  static setSoundVolume(volume: number): void {
    if (!Number.isInteger(volume) && volume >= 0 && volume <= 100) {
      throw new Error("invalid sound volume");
    }
    exec(`amixer -q sset Master ${volume}%`);
  }
}

export default Acoustic;
