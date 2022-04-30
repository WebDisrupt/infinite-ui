import { Component } from "./models/component";
/**
 * Quickly Create high quality UI
 *
 */
export declare class Infinite {
    static createSettingsRow(): void;
    /**
     * Create Label which includes a title and optional description
     * @param name - A useful name to quick describe a setting.
     * @param desc - (Optional) Describes setting controls in greater detail.
     */
    static createLabel(name: string, description?: string): Component;
    /**
     * Create Switch Toggle
     * @param name - A useful description/name for this switch.
     * @param status - On or off
     * @param events - Pass an object with different functions.
     */
    static createSwitch(name: string, status: boolean, events?: any): Component;
    /**
     * Create Icon button
     * @param name - A useful description/name for this button.
     * @param icon - Icon that represents the action.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createIconButton(name: string, icon: string, events?: any): Component;
    /**
     * Create Text button
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createTextButton(name: string, events?: any): Component;
    /**
     * Create Text Input
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createInput(name: string, events?: any): Component;
    /**
     * Create Hidden Text Input
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createHiddenInput(name: string, events?: any): Component;
    /**
     * Create textarea for multi-line input
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createTextArea(name: string, events?: any): Component;
    static createRow(content: any): any;
    /**
     * Create a settings container which is the root level container element.
     * You can then add SettingsGroups to that container.
     * @param attributes - (Optional) pass html attributes to add to container element.
     * @param parent - (Optional) pass a parent container or it will default ot the document body.
     * @returns
     */
    static createSettingsContainer(attributes?: any, parent?: any): any;
    /**
     * Create a setting group
     * @param container - Pass a container where this group belongs.
     * @param title - Pass a title for this group
     * @param settings - pass an array of setting containers
     * @returns
     */
    static addSettingsGroup(container: any, title: string, settings?: any): any;
    /**
     * Add a spacer to seperate setting group
     * @param height - How much to space between
     * @param settingsGroup - Where should this setting be added
     * @param includeDivider - (Optional) Add divider to bottom of row, defaults to false.
     * @returns
     */
    static addSettingSpacer(height: number, settingsGroup?: any, includeDivider?: boolean): any;
    /**
     * Add a new setting row to a setting group
     * @param components - Add components which add functionality and utility to rows.
     * @param settingsGroup - Where should this setting be added
     * @param includeDivider - (Optional) Add divider to bottom of row, defaults to true.
     * @returns
     */
    static addSetting(components: any, settingsGroup?: any, includeDivider?: boolean): any;
}
