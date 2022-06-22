/**
 * Finds whether the matching entry for 'name' in array
 * exists
 *
 * @param {Array}array
 * @param name
 * @returns {*}
 */
function findStyleValue( array, name ) {
    return array.find((element) => {
        return element.slug === name;
    } )
}

/**
 * Generates a classname based on whether the provided
 * attribute exists in the options array and returns a
 * CSS class as string.
 *
 * @param array
 * @param attribute
 * @returns {string|string}
 */
export function getPresetClass( array, attribute ) {
    if( typeof attribute === 'undefined' ) {
        return ''
    }

    const presetStyle = findStyleValue( array, attribute );

    return presetStyle ? `wf-${attribute}` : '';
}

export function getInlineStyle( array, attribute ) {

    const hasClassName = findStyleValue( array, attribute )

    if ( ! hasClassName ) {
       return attribute
    }
}