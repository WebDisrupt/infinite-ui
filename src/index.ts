import { DOM } from "domination-js";
import { UUIDv4 } from "./classes/UUIDv4";
import { ActionTypes } from "./enum/actions";
import { Component } from "./models/component";

/**
 * Quickly Create high quality UI
 * 
 */
export class Infinite {






    static createSettingsRow() {

    }

    /**
     * Create Label which includes a title and optional description
     * @param name - A useful name to quick describe a setting.
     * @param desc - (Optional) Describes setting controls in greater detail.
     */
    static createLabel(name: string, description: string = ""): Component {
        const id = UUIDv4.generate();
        let title = DOM.create("div", { id: id, class: "title", append: [DOM.create("h5", { text: name }), DOM.create("span", { text: description })] });
        return {
            id: id,
            type: ActionTypes.label,
            ref: title
        }
    }

    /**
     * Create Switch Toggle
     * @param name - A useful description/name for this switch.
     * @param status - On or off
     * @param events - Pass an object with different functions.
     */
    static createSwitch(name: string, status: boolean, events: any = { change: (e) => console.log("Switch -> status: ", e.target.checked) }): Component {
        const id = UUIDv4.generate();
        let checkbox = DOM.create("input", { id: id, type: "checkbox" }, events);
        checkbox.checked = status;
        let visual = DOM.create("label", { class: "visual", text: "Toggle", for: id });
        let container = DOM.create("div", { class: "switch", 'aria-label': name, 'tooltip-direction': "up", append: [checkbox, visual] });
        let switchData: Component = {
            id: id,
            type: ActionTypes.switch,
            ref: container
        }
        DOM.bindAttribute(switchData, "value", checkbox, 'checked');
        return switchData;
    }

    /**
     * Create Icon button 
     * @param name - A useful description/name for this button.
     * @param icon - Icon that represents the action.
     * @param events - Pass an object with different functions.
     * @returns 
     */
    static createIconButton(name: string, icon: string, events: any = { click: (e: PointerEvent) => console.log("Action -> triggered: ", e.target) }): Component {
        const id = UUIDv4.generate();
        let button = DOM.create("button", { id: id, 'aria-label': name, 'tooltip-direction': "up", class: "std button", append: DOM.create('i', { class: icon }) }, events);
        return {
            id: id,
            type: ActionTypes.action,
            ref: button
        }
    }

    /**
     * Create Text button 
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns 
     */
    static createTextButton(name: string, events: any = { click: (e: PointerEvent) => console.log("Action -> triggered: ", e.target) }): Component {
        const id = UUIDv4.generate();
        let button = DOM.create("button", { id: id, class: "std button text-fill", text: name }, events);
        return {
            id: id,
            type: ActionTypes.action,
            ref: button
        }
    }


    /**
     * Create Text Input 
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns 
     */
    static createInput(name: string, events: any = { change: (e: PointerEvent) => console.log("Change -> triggered: ", e.target) }): Component {
        const id = UUIDv4.generate();
        let input = DOM.create("input", { id: id, type: "text", class: "text-input", placeholder: name }, events);
        let container = DOM.create("div", { 'tooltip-direction': "up", append: input });
        return {
            id: id,
            type: ActionTypes.input,
            ref: container
        }
    }

    /**
     * Create Hidden Text Input 
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns 
     */
    static createHiddenInput(name: string, events: any = { change: (e: PointerEvent) => console.log("Change -> triggered: ", e.target) }): Component {
        const id = UUIDv4.generate();
        let input = DOM.create("input", { id: id, type: "password", class: "text-input", placeholder: name }, events);
        let container = DOM.create("div", { 'tooltip-direction': "up", append: input });
        return {
            id: id,
            type: ActionTypes.input,
            ref: container
        }
    }

    /**
     * Create textarea for multi-line input
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns 
     */
    static createTextArea(name: string, events: any = { change: (e: PointerEvent) => console.log("Change -> triggered: ", e.target) }): Component {
        const id = UUIDv4.generate();
        let textarea = DOM.create("textarea", { id: id, class: "text-area", placeholder: name }, events);
        let container = DOM.create("div", { 'tooltip-direction': "up", append: textarea });
        return {
            id: id,
            type: ActionTypes.textarea,
            ref: container
        }
    }


    static createRow(content: any) {
        return DOM.create("div", { class: "row", append: content });
    }


    /**
     * Create a settings container which is the root level container element.
     * You can then add SettingsGroups to that container.
     * @param attributes - (Optional) pass html attributes to add to container element.
     * @param parent - (Optional) pass a parent container or it will default ot the document body.
     * @returns 
     */
    static createSettingsContainer(attributes: any = { class: "settings-contianer" }, parent: any = document.body) {
        if (!attributes.hasOwnProperty("class")) {
            attributes.class = "settings-contianer";
        } else if (!attributes.class.includes("settings-contianer")) {
            attributes.class = "settings-contianer " + attributes.class;
        }
        let container = DOM.create("div", attributes);
        parent.append(container);
        return container;
    }

    /**
     * Create a setting group
     * @param container - Pass a container where this group belongs.
     * @param title - Pass a title for this group
     * @param settings - pass an array of setting containers
     * @returns 
     */
    static addSettingsGroup(container: any, title: string, settings: any = null) {
        let titleElem = DOM.create("div", { class: "group-title", text: title });
        let blockElem = settings === null ? DOM.create("div", { class: "block" }) : DOM.create("div", { class: "block", append: settings });
        let settingsGroup = DOM.create("div", { class: "settings-group", append: [titleElem, blockElem] });
        container.append(settingsGroup);
        return settingsGroup;
    }

    /**
     * Add a spacer to seperate setting group
     * @param height - How much to space between 
     * @param settingsGroup - Where should this setting be added
     * @param includeDivider - (Optional) Add divider to bottom of row, defaults to false.
     * @returns 
     */
    static addSettingSpacer(height: number, settingsGroup: any = null, includeDivider: boolean = false) {
        let rowClass = includeDivider ? "spacer divider" : "spacer";
        let group = DOM.create("div", { class: rowClass, style: `height: ${height}px;`, text: "" });
        if (settingsGroup !== null) settingsGroup.querySelector(".block").append(group);
        if (settingsGroup === null) console.log("The settings group doesn't exist.");
        return group;
    }

    /**
     * Add a new setting row to a setting group
     * @param components - Add components which add functionality and utility to rows.
     * @param settingsGroup - Where should this setting be added
     * @param includeDivider - (Optional) Add divider to bottom of row, defaults to true.
     * @returns 
     */
    static addSetting(components: any, settingsGroup: any = null, includeDivider: boolean = true) {
        let rowClass = includeDivider ? "row divider" : "row";
        let group = DOM.create("div", { class: rowClass, append: components });
        if (settingsGroup !== null) settingsGroup.querySelector(".block").append(group);
        if (settingsGroup === null) console.log("The settings group doesn't exist.");
        return group;
    }


}