/**
 * Internal dependencies
 */
import {
    getSize,
    getSizeObjectByValue,
    widthUnits
} from "../../utils";
import { BlockOptionsPicker } from "../../components";
import { minWidthOptions } from "./constants";


function MinWidthPanel( props) {
    const {
        attributes,
        setAttributes
    } = props

    const onChange = ( value ) => {
        const sizeSlug = getSizeObjectByValue( minWidthOptions, value ).slug;

        if ( ! sizeSlug ) {
            setAttributes( {
                minWidth: sizeSlug ? undefined : value
            } )
        }
        setAttributes( {
            minWidth: sizeSlug ? sizeSlug : value

        } );
    };

    const sizeObject = getSize(
        minWidthOptions,
        attributes.minWidth,
        attributes?.minWidth
    );

    const sizeValue = sizeObject?.size || attributes?.minWidth || attributes.minWidth

    return (
        <BlockOptionsPicker
            sizeOptions={ minWidthOptions }
            panelName='Item Content Width'
            units={ widthUnits }
            onChange={ onChange }
            value={ sizeValue }
        />
    );
}

export default MinWidthPanel;