import { exec } from "child_process";

abstract class Visual {
  static turnOn() {
    exec("xset dpms force on");
  }

  static turnOff() {
    exec("xset dpms force off");
  }
}

export default Visual;
