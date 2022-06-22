/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { settings } from "@wordpress/icons";
import { useMemo, useState, forwardRef } from "@wordpress/element";

import {
    Button,
    Flex,
    FlexItem,
    VisuallyHidden,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalUnitControl as UnitControl,
    __experimentalUseCustomUnits as useCustomUnits,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
    namespace,
    getSelectedOption,
    getSizeOptions,
    isSimpleCssValue,
    splitValueAndUnitFromSize,
    CUSTOM_STYLE_VALUE
} from "../../utils";


function BlockOptionsPicker(
    {
        sizeOptions = [],
        panelName = 'Size',
        units,
        onChange,
        value,
        withReset = true,
    },
    ref
) {

    const optionsContainComplexValues = sizeOptions.some(
        ({size}) => !isSimpleCssValue(size)
    );

    const shouldUseButtons = sizeOptions.length > 4;

    const options = useMemo(
        () => getSizeOptions(
            shouldUseButtons,
            sizeOptions,
            optionsContainComplexValues
        ),
        [
            shouldUseButtons,
            sizeOptions,
            optionsContainComplexValues
        ]
    );

    const selectedOption = getSelectedOption( sizeOptions, value );
    const isCustomValue = selectedOption.slug === CUSTOM_STYLE_VALUE;
    const [ showCustomValueControl, setShowCustomValueControl ] = useState( isCustomValue );

    const headerHint = useMemo( () => {
        if ( showCustomValueControl ) {
            return `(${ __('Custom', namespace) })`;
        }

        // If we have custom value not in sizeOptions, show it as a hint
        if ( isCustomValue ) {
            return isSimpleCssValue( value ) && `(${ value })`;
        }

        // if the list of values is too long, we should use buttons instead.
        if ( shouldUseButtons ) {
            return(
                isSimpleCssValue( selectedOption?.size ) &&
                `(${ selectedOption?.size })`
            );
        }

        // Calculate the `hint` for toggle group control.
        let hint = selectedOption.name;
        if ( ! optionsContainComplexValues &&
            typeof selectedOption.size === 'string'
        ) {
            const [ numericValue, unit ] = splitValueAndUnitFromSize( selectedOption.size );
            hint += ` (${ numericValue }${ unit })`;
        }
        return hint;

    }, [
        showCustomValueControl,
        selectedOption?.name,
        selectedOption?.size,
        value,
        isCustomValue,
        shouldUseButtons,
        optionsContainComplexValues
    ] );

    if ( ! options ) {
        return null;
    }

    const hasUnits = [ typeof value, typeof sizeOptions?.[ 0 ]?.size ].includes(
        'string'
    );

    const noUnitsValue = ! hasUnits ? value: parseInt( value );
    const isPixelValue = typeof value === 'number' || value?.endsWith?.( 'px' );

    const defaultUnits = units ? units : useCustomUnits( {
        availableUnits: [ 'rem', 'em', '%', 'px' ]
    } )

    // From WordPress styles.
    const defaultClassName = 'components-font-size-picker'
    return(
        <fieldset className={ defaultClassName } { ...( ref ? {} : { ref } ) }>
            <VisuallyHidden as="legend">{ __( 'Block Default Options', namespace ) }</VisuallyHidden>
            <Flex justify="space-between" className={ `${ defaultClassName }__header` }>
                <FlexItem>
                    { __( `${ panelName }`, namespace ) }
                    { headerHint && (
                        <span className={ `${ defaultClassName }__header__hint`}>
                            { headerHint }
                        </span>
                    ) }
                </FlexItem>
                <FlexItem>
                    <Button
                        label={ showCustomValueControl
                            ? __( 'Use size preset' )
                            : __( 'Set custom size' )
                        }
                        icon={ settings }
                        onClick={ () => {
                            setShowCustomValueControl(
                                ! showCustomValueControl
                            );
                        } }
                        isPressed={ showCustomValueControl }
                        isSmall
                    />
                </FlexItem>
            </Flex>
            <div className={ `${ defaultClassName }__controls` }>
                { ! shouldUseButtons && ! showCustomValueControl && (
                    <ToggleGroupControl
                        label={__(`${panelName}`, namespace ) }
                        hideLabelFromVision
                        value={ value }
                        onChange={ ( newValue ) => {
                            onChange( hasUnits ? newValue : Number( newValue ) );
                        } }
                        isBlock
                    >
                        { options.map( ( option ) => (
                            <ToggleGroupControlOption
                                key={ option.key }
                                value={ option.value }
                                label={ option.name }
                                aria-label={ option.name }
                                showTooltip={ true }
                            />
                        ) ) }
                    </ToggleGroupControl>
                ) }
                { showCustomValueControl && (
                    <Flex
                        justify="space-between"
                        className={ `${ defaultClassName }__custom-size-control` }
                    >
                        <FlexItem isBlock>
                            <UnitControl
                                label={ __('Custom', namespace ) }
                                labelPosition="top"
                                hideLabelFromVision
                                value={ value }
                                onChange={ ( nextSize ) => {
                                    if(
                                        0 === parseFloat( nextSize ) ||
                                        ! nextSize
                                    ) {
                                        onChange( undefined );
                                    } else {
                                        onChange(
                                            hasUnits ? nextSize : parseInt( nextSize, 10 )
                                        );
                                    }
                                } }
                                units={ hasUnits ? defaultUnits : [] }
                            />
                        </FlexItem>
                        { withReset && (
                            <FlexItem isBlock>
                                <Button
                                    className="components-color-palette__clear"
                                    disabled={ value === undefined }
                                    onClick={ () => {
                                        onChange( undefined );
                                    } }
                                    isSmall
                                    variant="secondary"
                                >
                                    { __( 'Reset', namespace ) }
                                </Button>
                            </FlexItem>
                        ) }
                    </Flex>
                ) }
            </div>
        </fieldset>
    );
}

export default forwardRef( BlockOptionsPicker );