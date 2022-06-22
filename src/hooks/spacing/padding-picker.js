/**
 * Internal dependencies
 */
import {
    spaceUnits,
    getSize,
    getSizeObjectByValue,
} from "../../utils";
import { BlockOptionsPicker } from "../../components";
import { paddingOptions } from "./constants";


function PaddingPanel( props) {
    const {
        attributes,
        setAttributes
    } = props

    const onChange = ( value ) => {
        const sizeSlug = getSizeObjectByValue( paddingOptions, value ).slug;

        if ( ! sizeSlug ) {
            setAttributes( {
                padding: sizeSlug ? undefined : value
            } )
        }
        setAttributes( {
            padding: sizeSlug ? sizeSlug : value

        } );
    };

    const sizeObject = getSize(
        paddingOptions,
        attributes.padding,
        attributes?.padding
    );

    const sizeValue = sizeObject?.size || attributes?.padding || attributes.padding

    return (
        <BlockOptionsPicker
            sizeOptions={ paddingOptions }
            panelName='Padding'
            units={ spaceUnits }
            onChange={ onChange }
            value={ sizeValue }
        />
    );
}

export default PaddingPanel;