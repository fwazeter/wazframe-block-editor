/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import namespace from "./namespace";

const DEFAULT_STYLE_VALUE = 'default';
const DEFAULT_OPTION = {
    slug: DEFAULT_STYLE_VALUE,
    name: __( 'Default', namespace ),
};

export const CUSTOM_STYLE_VALUE = 'custom';
const CUSTOM_OPTION = {
    slug: CUSTOM_STYLE_VALUE,
    name: __( 'Custom', namespace ),
};

/**
 * In case we have at most five sizes, where at least one
 * contain a complex css value(clamp, var, etc..) show an incremental sequence
 * as a label of the font size. We do this because complex css values
 * cannot be calculated properly and the incremental sequence as labels
 * can help the user better mentally map the different available font sizes.
 */
const OPTIONS_ALIASES = [ 'SM', 'M', 'LG', 'None' ];

/**
 * Helper util to split a font size to its numeric value
 * and its `unit`, if exists.
 *
 * @param {string|number} size Font size.
 * @return {[number, string]} An array with the numeric value and the unit if exists.
 */
export function splitValueAndUnitFromSize( size ) {
    const [ numericValue, unit ] = `${ size }`.match( /[\d\.]+|\D+/g );

    if ( ! isNaN( parseFloat( numericValue ) ) && isFinite( numericValue ) ) {
        return [ numericValue, unit ];
    }

    return [];
}


/**
 * Calculating css vars for sizes doesn't work well. So until
 * we have the way of calculating them don't display them.
 *
 * @param {string|number} value The value that is checked.
 * @return {boolean} Whether the value is a simple css value.
 */
export function isSimpleCssValue( value ) {
    const sizeRegex = /^[\d\.]+(px|em|rem|vw|vh|%)?$/i;
    return sizeRegex.test( value );
}

/**
 * Return size options in the proper format depending
 * on the currently used control (select, toggle group).
 *
 * @param {boolean}  useButtonControl               Whether to use a select control.
 * @param {Object[]} optionsArray                   Array of available size objects.
 * @param {boolean}  optionsContainComplexCssValues Whether sizes contain at least one complex css value(clamp, var, etc..).
 * @return {Object[]|null} Array of font sizes in proper format for the used control.
 */
export function getSizeOptions(
    useButtonControl,
    optionsArray,
    optionsContainComplexCssValues
) {
    if ( ! optionsArray.length ) {
        return null;
    }
    return useButtonControl
        ? getButtonOptions( optionsArray )
        : getToggleGroupOptions( optionsArray, optionsContainComplexCssValues );
}

function getButtonOptions( optionsArray ) {
    const options = [
        DEFAULT_OPTION,
        ...optionsArray,
        ...( [ CUSTOM_OPTION ] ),
    ];
    return options.map( ( { slug, name, size } ) => ( {
        key: slug,
        name,
        size,
        __experimentalHint:
            size && isSimpleCssValue( size ) && parseFloat( size ),
    } ) );
}

function getToggleGroupOptions( optionsArray, optionsContainComplexCssValues ) {
    return optionsArray.map( ( { slug, size, name }, index ) => {
        let label = optionsContainComplexCssValues
            ? OPTIONS_ALIASES[ index ]
            : size;
        if ( ! optionsContainComplexCssValues && typeof size === 'string' ) {
            const [ numericValue ] = splitValueAndUnitFromSize( size );
            label = numericValue;
        }
        return { key: slug, value: size, label, name };
    } );
}

export function getSelectedOption( sizeOptions, value ) {
    if ( ! value ) {
        return DEFAULT_OPTION;
    }

    return(
        sizeOptions.find( ( property ) => property.size === value )
        || CUSTOM_OPTION
    );
}

/**
 * Returns the corresponding size object for a given value.
 *
 * @param {Array}  sizeOptions  Array of font size objects.
 * @param {number} value        Font size value.
 *
 * @return {Object} Font size object.
 */
export function getSizeObjectByValue( sizeOptions, value ) {
    const sizeObject = find( sizeOptions, { size: value } );
    if ( sizeObject ) {
        return sizeObject;
    }

    return {
        size: value,
    };
}

/**
 *  Returns the font size object based on an array of named font sizes and the namedFontSize and customFontSize values.
 * 	If namedFontSize is undefined or not found in fontSizes an object with just the size value based on customFontSize is returned.
 *
 * @param {Array}   sizes                   Array of size objects containing at least the "name" and "size" values as properties.
 * @param {?string} sizeAttribute           Content of the size attribute (slug).
 * @param {?number} customSizeAttribute     Contents of the custom size attribute (value).
 *
 * @return {?Object} If sizeAttribute is set and an equal slug is found in sizes it returns the size object for that slug.
 * 					 Otherwise, an object with just the size value based on customSize is returned.
 */
export const getSize = (
    sizes,
    sizeAttribute,
    customSizeAttribute
) => {
    if ( sizeAttribute ) {
        const sizeObject = find( sizes, { slug: sizeAttribute } );
        if ( sizeObject ) {
            return sizeObject;
        }
    }
    return {
        size: customSizeAttribute,
    };
};