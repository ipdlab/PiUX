/// <reference types="node" />
declare const PatternParser: (lines: Buffer | string[], pattern: RegExp) => RegExpMatchArray | null;
export default PatternParser;
