/**
 * External dependencies
 */
import { isObject, pickBy, mapValues, identity, isEmpty } from 'lodash';

/**
 * Removed falsy values from nested object. This
 * helps reset functions in block editor remove unnecessary
 * values without requiring a replacement value like a blank string.
 *
 * @param {*} object
 * @return {*} Object cleaned from falsy values
 */
export const cleanEmptyObject = (object) => {
    if (!isObject(object) || Array.isArray(object)) {
        return object;
    }
    const cleanedNestedObjects = pickBy(
        mapValues(object, cleanEmptyObject),
        identity
    );
    return isEmpty(cleanedNestedObjects) ? undefined : cleanedNestedObjects;
};