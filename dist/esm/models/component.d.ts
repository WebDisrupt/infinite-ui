import { ActionTypes } from "../enum/actions";
/**
 *  Component - Basic structure for elements
 */
export interface Component {
    /** A unique id on how to reference the component */
    id: string;
    /** describe what action takes place */
    type: ActionTypes;
    /** An optional Data bound value that can be saved or triggered */
    value?: string | boolean;
    /** The DOM container associated with this component */
    ref: HTMLElement | HTMLInputElement | HTMLButtonElement;
}
