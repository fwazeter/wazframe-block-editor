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
import { spaceUnits } from "../../utils";

/**
 * Custom setting for default options provided
 * to blocks.
 */
/**
 *
 * @param {Object} props            Block Props
 */
export function Margin(props ) {
    const {
        attributes: { margin },
        setAttributes
    } = props

    return (
        <>
            <Flex direction="column">
                <Flex justify="space-between" align="baseline">
                    <p className="component-box-control__label">
                        <strong>{ __( "Set Custom Margin", namespace ) }</strong>
                    </p>
                    <Button
                        className="component-box-control__reset-button"
                        isSecondary
                        isSmall
                        onClick={ () => setAttributes( { margin: undefined} ) }
                    >
                        { __('Reset', namespace) }
                    </Button>
                </Flex>
                <UnitControl
                    value={ margin }
                    onChange={ ( value ) => setAttributes({ margin: value}) }
                    units={ spaceUnits }
                    __unstableInputWidth="50%"
                />
            </Flex>
        </>
    );
}