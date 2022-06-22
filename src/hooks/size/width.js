/**
 * Internal dependencies
 */
import {
    getSize,
    getSizeObjectByValue,
    widthUnits
} from "../../utils";
import { BlockOptionsPicker } from "../../components";
import { sidebarOptions } from "./constants";

/**
 * Custom setting for default options provided
 * to blocks.
 */
/**
 *
 * @param {Object} props            Block Props
 */
function WidthPanel( props) {
    const {
        attributes,
        setAttributes
    } = props

    const onChange = ( value ) => {
        const sizeSlug = getSizeObjectByValue( sidebarOptions, value ).slug;

        if ( ! sizeSlug ) {
            setAttributes( {
              width: sizeSlug ? undefined : value
            } )
        }
        setAttributes( {
            width: sizeSlug ? sizeSlug : value

        } );
    };

    const sizeObject = getSize(
        sidebarOptions,
        attributes.width,
        attributes?.width
    );

    const sizeValue = sizeObject?.size || attributes?.width || attributes.width

    return (
        <BlockOptionsPicker
            sizeOptions={ sidebarOptions }
            panelName='Set Width'
            units={ widthUnits }
            onChange={ onChange }
            value={ sizeValue }
        />
    );
}

export default WidthPanel;