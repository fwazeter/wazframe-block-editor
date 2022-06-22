/**
 * We should be able to deprecate this file soon. Currently center
 * block is using it.
 */
/**
 * Wordpress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    Flex,
    Button,
    __experimentalUnitControl as UnitControl
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { namespace } from '../../utils';
import { widthUnits } from "../../utils";

/**
 * Custom setting for default options provided
 * to blocks.
 */
/**
 *
 * @param {Object} props            Block Props
 */
export function CustomWidth( props ) {
    const {
        attributes: { width },
        setAttributes
    } = props

    return (
        <>
            <Flex direction="column">
                <Flex justify="space-between" align="baseline">
                    <p className="component-box-control__label">
                        <strong>{ __( "Custom Content Width", namespace ) }</strong>
                    </p>
                    <Button
                        className="component-box-control__reset-button"
                        isSecondary
                        isSmall
                        onClick={ () => setAttributes( { width: undefined} ) }
                    >
                        { __('Reset', namespace) }
                    </Button>
                </Flex>
                <UnitControl
                    value={ width }
                    onChange={ ( value ) => setAttributes({ width: value}) }
                    units={ widthUnits }
                    __unstableInputWidth="50%"
                />
            </Flex>
        </>
    );
}