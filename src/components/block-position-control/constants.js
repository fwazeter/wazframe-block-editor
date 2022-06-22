/**
 * WordPress dependencies
 */
import { __, _x } from "@wordpress/i18n";
import {
    stack,
    box,
    aspectRatio,
    layout,
    pullquote,
    header,
} from "@wordpress/icons";

export const BLOCK_POSITION_CONTROLS = {
    none: {
        icon: layout,
        title: _x( 'Default (Absolute)', 'Position option' ),
        info: __('Position to Container' )
    },
    absolute: {
        icon: stack,
        title: __( 'Absolute' ),
        info: __( 'Position to Container' )
    },
    relative: {
        icon: aspectRatio,
        title: __( 'Relative' ),
        info: 'Position to Normal Spot'
    },
    fixed: {
        icon: box,
        title: __( 'Fixed' ),
        info: 'Position to Viewport'
    },
    static: {
        icon: pullquote,
        title: __( 'Static' ),
        info: __('Element Default')
    },
    sticky: {
        icon: header,
        title: __('Sticky'),
        info: __('Position to Scroll' )
    }
};

export const DEFAULT_CONTROL = 'none';

export const POPOVER_PROPS={
    isAlternate: true,
}
