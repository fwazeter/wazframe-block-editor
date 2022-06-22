import {__} from "@wordpress/i18n";
/**
 * Default settings for minWidth.
 * Used in Grid block.
 */
export const minWidthOptions = [
    {
        name: __('Medium'),
        slug: 'size-medium',
        size: '22rem',
    },
    {
        name: __( 'Large' ),
        slug: 'size-large',
        size: '29rem'
    },
    {
        name: __('Content' ),
        slug: 'size-content',
        size: '65ch'
    }
]

/**
 * Default settings sidebar
 */
export const sidebarOptions = [
    {
        name: __('Small'),
        slug: 'size-small',
        size: '10rem',
    },
    {
        name: __( 'Medium' ),
        slug: 'size-medium',
        size: '15rem'
    },
    {
        name: __('Large' ),
        slug: 'size-large',
        size: '20rem'
    }
]