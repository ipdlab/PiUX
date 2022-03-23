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

// Set the sound master volume as 54%
Acoustic.setSoundVolume(54);
```
