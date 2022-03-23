declare abstract class Acoustic {
    /**
     * Get the master sound volume (percentage)
     * @returns an integer in range of 0-100
     */
    static getSoundVolume(): number;
    /**
     * Set the master sound volume (percentage)
     * @param volume an integer in range of 0-100
     */
    static setSoundVolume(volume: number): void;
}
export default Acoustic;
