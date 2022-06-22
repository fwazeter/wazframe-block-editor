/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    Button,
    Flex,
    FlexItem,
    FocalPointPicker,
    __experimentalSpacer as Spacer,
} from "@wordpress/components"

/**
 * Internal dependencies
 */
import { cleanEmptyObject } from "../../utils";

function PositionPicker( props ) {
    const {
        attributes: { position },
        setAttributes,
    } = props


    const reset = () => {
        setAttributes({
            position: cleanEmptyObject({
                ...position,
                x: undefined,
                y: undefined,
            })
        })
    }

    const onChange = ( modify ) => {

        const newStyle = {
            ...position,
            x: modify.x,
            y: modify.y,
        }

        setAttributes( {
            position: cleanEmptyObject( newStyle ),
        } )

    }

    const defaultClassName = 'components-font-size-picker'
    return(
        <>
            <Flex justify="space-between" gap="2" className={ `${ defaultClassName }__header` }>
                <FlexItem>
                    { __( 'Adjust Position' ) }
                </FlexItem>
                <FlexItem>
                    <Button
                        className="components-color-palette__clear"
                        disabled={ position === undefined }
                        onClick={ reset }
                        isSmall
                        variant="secondary"
                    >
                        { __( 'Reset' ) }
                    </Button>
                </FlexItem>
            </Flex>
            <Spacer margin="2">
                <FocalPointPicker
                    value={ position }
                    onChange={ onChange }
                />
            </Spacer>
        </>
    )
}

export default PositionPicker;