# PiUX

UX Toolkit for Raspberry Pi

## Installing

```bash
npm install git+https://github.com/ipdlab/PiUX.git
```

## Usage

### Visual

```javascript
import { Visual } from "piux";

// Get the display state
const displayState = Visual.getDisplayState();
console.log(displayState); // "on" or "off"

// Toggle the display state
if (displayState === "off") {
  Visual.setDisplayState("on");
} else {
  Visual.setDisplayState("off");
}
```

### Acoustic

```javascript
import { Acoustic } from "piux";

// Get the current master sound volume
const currentVolume = Acoustic.getSoundVolume();
console.log(currentVolume); // 0-100

// Set the master sound volume as 54%
Acoustic.setSoundVolume(54);
```
