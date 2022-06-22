/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    __experimentalUnitControl as UnitControl
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
    cleanEmptyObject,
    spaceUnits,
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
    return props.attributes.style?.spacing?.blockGap !== undefined;
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
            spacing: {
                ...style?.spacing,
                blockGap: undefined,
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

export function BlockGapEdit( props ) {
    const {
        attributes: { style },
        setAttributes,
    } = props

    const onChange = ( modify ) => {

        const newStyle = {
            ...style,
            spacing: {
                ...style?.spacing,
                blockGap: modify,
            },
        };

        setAttributes( {
            style: cleanEmptyObject( newStyle ),
        } );
    };

    return (
        <>
            <UnitControl
                value={ style?.spacing?.blockGap }
                onChange={ onChange }
                label={ __( 'Block spacing', namespace ) }
                units={ spaceUnits }
                __unstableInputWidth="80px"
            />
        </>
    );
}