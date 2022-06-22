/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    __experimentalNumberControl as NumberControl
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
    cleanEmptyObject,
    namespace
} from "../utils";

/**
 * Checks if there is a current value in the block gap block support attributes.
 * ToolsPanelItem requires a bool check for an existing value.
 *
 * @param {Object} props Block props.
 * @return {boolean}	Whether or not the block has a value set.
 */
export function hasValue( props ) {
    return props.attributes.style?.flex?.flexGrow !== undefined;
}

/**
 * Resets the block gap attribute.
 *
 * @param {Object} props		Block props.
 * @param {Object} props.attributes	Block's attributes.
 * @param {Object} props.setAttributes Function to set block's attribute.
 */
export function reset( { attributes = {}, setAttributes } ) {
    const { style }	= attributes;

    setAttributes( {
        style: cleanEmptyObject( {
            ...style,
            flex: {
                ...style?.flex,
                flexGrow: undefined,
            },
        } ),
    } );
}

/**
 * Inspector control panel containing the block gap related configuration.
 *
 * @param {Object} props
 * @returns {WPElement} block gap edit element.
 */

export function FlexGrowEdit( props ) {
    const {
        attributes: { style },
        setAttributes,
    } = props

    const onChange = ( modify ) => {

        const newStyle = {
            ...style,
            flex: {
                ...style?.flex,
                flexGrow: modify,
            },
        };

        setAttributes( {
            style: cleanEmptyObject( newStyle ),
        } );
    };

    return (
        <>
            <NumberControl
                value={ style?.flex?.flexGrow }
                onChange={ onChange }
                label={ __( 'Flex Grow', namespace ) }
                isDragEnabled
                isShiftStepEnabled
                shiftStep={10}
                step={1}
            />
        </>
    );
}