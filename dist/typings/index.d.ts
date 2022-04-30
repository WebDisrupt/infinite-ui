/**
 * Document Object Model - helper functions
 * Helps you interact with the DOM safely and easily.
 *
 */
export declare class Infinite {
    /**
     * Create standardized container and pass content
     * @param content - String | Element | Element[]
     */
    static createContainer(content: any): any;
    /**
     * Create standardize switch
     * @param status - On or off
     */
    static createSwitch(status: boolean, id: string): any;
}
