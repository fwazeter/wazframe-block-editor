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
export function Padding(props ) {
    const {
        attributes: { padding },
        setAttributes
    } = props

    return (
        <>
            <Flex direction="column">
                <Flex justify="space-between" align="baseline">
                    <p className="component-box-control__label">
                        <strong>{ __( "Set Custom Padding", namespace ) }</strong>
                    </p>
                    <Button
                        className="component-box-control__reset-button"
                        isSecondary
                        isSmall
                        onClick={ () => setAttributes( { padding: undefined} ) }
                    >
                        { __('Reset', namespace) }
                    </Button>
                </Flex>
                <UnitControl
                    value={ padding }
                    onChange={ ( value ) => setAttributes({ padding: value}) }
                    units={ spaceUnits }
                    __unstableInputWidth="50%"
                />
            </Flex>
        </>
    );
}