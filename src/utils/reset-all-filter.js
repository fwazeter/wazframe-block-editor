/**
 * External dependencies
 */
import { useCallback } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { cleanEmptyObject } from "./clean-empty-object";

/**
 * Uses the block editor data store to get the clientId's for
 * each panel, associated with the block and panel area, then
 * allows for the createResetAllFilters function on individual blocks to work.
 *
 * This is slightly complicated, but could be basis for extending
 * global styles.
 * @url https://github.com/WordPress/gutenberg/blob/8675f86f885ca389f3bca39971b22cb897bab61b/packages/block-editor/src/components/inspector-controls/block-support-tools-panel.js
 * @url https://github.com/WordPress/gutenberg/blob/6215bbcba156793eeaec2c77f8ae6b78876670eb/packages/block-editor/src/hooks/dimensions.js
 * @type {(function(*=): void)|*}
 */
export const resetAll = useCallback(
    ( resetFilters = [] ) => {
        const newAttributes = {};

        const clientIds = [ panelId ];

        clientIds.forEach( ( clientId ) => {
            const { style } = getBlockAttributes( clientId );
            let newBlockAttributes = { style };

            resetFilters.forEach( ( resetFilter ) => {
                newBlockAttributes = {
                    ...newBlockAttributes,
                    ...resetFilter( newBlockAttributes ),
                };
            } );

            newBlockAttributes = {
                ...newBlockAttributes,
                style: cleanEmptyObject( newBlockAttributes.style ),
            };

            newAttributes[ clientId ] = newBlockAttributes;
        } )

        updateBlockAttributes( clientIds, newAttributes, true );
    },
    [
        cleanEmptyObject,
        getBlockAttributes,
        panelId,
        updateBlockAttributes,
    ]
);