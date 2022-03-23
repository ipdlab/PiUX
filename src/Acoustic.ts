import { exec } from "child_process";

abstract class Acoustic {
  /**
   * Set the master volume
   * @param volume 0-100 percentage with only integer
   */
  static setSoundVolume(volume: number): void {
    if (!Number.isInteger(volume) && volume >= 0 && volume <= 100) {
      throw new Error("invalid volume");
    }
    exec(`amixer -q sset Master ${volume}%`);
  }
}

export default Acoustic;
