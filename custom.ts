/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.adafruit.com/blocks/custom
 */

/**
 * Custom blocks
 */
//
class WifiPacket {
    /**
     * The first number in the payload.
     */
    public receivedString: string;
}

namespace network {
    /**
     * Send a text string over the WiFi transmitter.
     * @param value text string to send
     */
    //% blockId="wifi_send_string" block="wifi send string %String"
    //% help=network/wifi-send-string
    //% parts="wifi" weight=90 group="WiFi"
    //% parameter = String
    //% type = string
    export function wifiSendString(String: string) {

        //TODO send string to ESP-01 serial

    }

    /**
     * Run some code when the wifi receiver gets a string.
     */
    //% blockId=wifi_on_wifi_received block="on wifi received" blockGap=8
    //% help=network/on-wifi-received-string
    //% parts="wifi" group="WiFi"
    //% parameter = String
    //% type = string
    export function onWifiReceivedString(handler: (String: string) => void) {

        //TODO store last string received in a variable
    }
}
