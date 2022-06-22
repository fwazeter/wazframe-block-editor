/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    ToolbarDropdownMenu,
    ToolbarGroup,
    MenuGroup,
    MenuItem
} from '@wordpress/components'

/**
 * Internal dependencies
 */
import {
    BLOCK_POSITION_CONTROLS,
    DEFAULT_CONTROL,
    POPOVER_PROPS
} from "./constants";

import useAvailablePositions from "./use-available-positions";

function BlockPositionUI(
    {
        value,
        onChange,
        controls,
        isToolbar,
        isCollapsed = true
    } ) {

    const enabledControls = useAvailablePositions( controls );
    const hasEnabledControls = !! enabledControls.length;

    if ( ! hasEnabledControls ) {
        return null;
    }
    // We need something before here to render controls or render controls as input
    // for now we're only using this with the Imposter block, so it should be fine.
    // We'll need to add a fallback to append 'none' if 'none doesn't exist.
    function onChangePosition( position ) {
        onChange( [ value, 'none' ].includes( position ) ? undefined : position );
    }

    const activePositionControl = BLOCK_POSITION_CONTROLS[ value ];
    const defaultPositionControl = BLOCK_POSITION_CONTROLS[ DEFAULT_CONTROL ];

    const UIComponent = isToolbar ? ToolbarGroup : ToolbarDropdownMenu;

    const commonProps = {
        popoverProps: POPOVER_PROPS,
        icon: activePositionControl ? activePositionControl.icon : defaultPositionControl.icon,
        label: __('Position' ),
        toggleProps: { describedBy: __('Change position') },
    };
    const extraProps = isToolbar ? {
        isCollapsed,
        controls: enabledControls.map( ( { name: controlName } ) => {
            return {
                ...BLOCK_POSITION_CONTROLS[ controlName ],
                isActive: value === controlName || ( ! value && controlName === 'none' ),
                role: isCollapsed ? 'menuitemradio' : undefined,
                onClick: () => onChangePosition( controlName ),
            };
        } ),
        }
        : {
            children: ( { onClose } ) => {
                return (
                    <>
                        <MenuGroup className="block-editor-block-alignment-control__menu-group">
                            { enabledControls.map( ( { name: controlName } ) => {
                                const { icon, title, info } = BLOCK_POSITION_CONTROLS[ controlName ];
                                // If no value provided, choose 'none'
                                const isSelected =
                                    controlName === value || ( ! value && controlName === 'none' );

                                return(
                                    <MenuItem
                                        key={ controlName }
                                        icon={ icon }
                                        iconPosition="left"
                                        className={ classNames(
                                            'components-dropdown-menu__menu-item',
                                            {
                                                'is-active': isSelected
                                            }
                                        ) }
                                        isSelected={ isSelected }
                                        onClick={ () => {
                                            onChangePosition(
                                                controlName
                                            );
                                            onClose();
                                        } }
                                        role="menuitemradio"
                                        info={ info }
                                    >
                                        { title }
                                    </MenuItem>
                                );
                            }
                            ) }
                        </MenuGroup>
                    </>
                );
            },
        };
    return <UIComponent { ...commonProps } { ...extraProps } />;
}

export default BlockPositionUI;