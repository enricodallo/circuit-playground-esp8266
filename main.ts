/**
 * Use this file to define custom functions and blocks. 
 * Read more at https://makecode.adafruit.com/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace clr_text {
    /**
     * TODO: describe your function here
     * @param s string to retrive a character code from, eg: "Hello"
     * @param n index position, starting at 0, to retrieve the character code of
     * @return the character code of position n from s
     */
    //% block
    export function charCodeAt(s: string, n: number): number {
        return s.charCodeAt(n);
    }

}
