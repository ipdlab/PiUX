export declare type DisplayState = "on" | "off";
declare abstract class Visual {
    static setDisplayState(state: DisplayState, display?: string): void;
}
export default Visual;
