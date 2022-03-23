const PatternParser = (
  lines: Buffer | string[],
  pattern: RegExp
): RegExpMatchArray | null => {
  if (Buffer.isBuffer(lines)) {
    lines = lines.toString().split("\n");
  }
  for (const line of lines) {
    const match = line.match(pattern);
    if (match?.length) return match;
  }
  return null;
};

// const match = PatternParser(
//   `Keyboard Control:
// auto repeat:  on    key click percent:  0    LED mask:  00000000
// XKB indicators:
//   00: Caps Lock:   off    01: Num Lock:    off    02: Scroll Lock: off
//   03: Compose:     off    04: Kana:        off    05: Sleep:       off
//   06: Suspend:     off    07: Mute:        off    08: Misc:        off
//   09: Mail:        off    10: Charging:    off    11: Shift Lock:  off
//   12: Group 2:     off    13: Mouse Keys:  off
// auto repeat delay:  500    repeat rate:  33
// auto repeating keys:  00ffffffdffffbbf
//                       fadfffefffedffff
//                       9fffffffffffffff
//                       fff7ffffffffffff
// bell percent:  50    bell pitch:  400    bell duration:  100
// Pointer Control:
// acceleration:  20/10    threshold:  10
// Screen Saver:
// prefer blanking:  yes    allow exposures:  yes
// timeout:  600    cycle:  600
// Colors:
// default colormap:  0x20    BlackPixel:  0x0    WhitePixel:  0xffffff
// Font Path:
// built-ins
// DPMS (Energy Star):
// Standby: 600    Suspend: 600    Off: 600
// DPMS is Enabled
// Monitor is On`.split("\n"),
//   /Monitor is (.+)/
// );

// const match = PatternParser(
//   `
// Simple mixer control 'Master',0
//   Capabilities: pvolume pswitch pswitch-joined
//   Playback channels: Front Left - Front Right
//   Limits: Playback 0 - 65536
//   Mono:
//   Front Left: Playback 32768 [50%] [on]
//   Front Right: Playback 32768 [50%] [on]
// `.split("\n"),
//   /Front Left: Playback \d+ \[(\d+)%\]/
// );

// console.log(match);

export default PatternParser;
