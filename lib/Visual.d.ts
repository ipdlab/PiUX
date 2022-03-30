export declare type DisplayState = "on" | "off";
declare abstract class Visual {
    /**
     * Get the display state (DisplayState)
     * @returns "on" or "off"
     */
    static getDisplayState(): DisplayState;
    /**
     * Set the display state (DisplayState)
     * @param state "on" or "off"
     * @param display X11 DISPLAY (":0" by default)
     */
    static setDisplayState(state: DisplayState, display?: string): void;
}
export default Visual;
