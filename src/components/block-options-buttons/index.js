/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
    Button,
    __experimentalText as Text,
} from '@wordpress/components';

/**
 * Block options component for the Settings Sidebar
 * Note: using CSS from WP default block-editor block styles
 * for component.
 *
 * @param {Object} props            Block props.
 * @param {Array} options           Options array.
 * @param {string} attributeName    Name of the attribute to modify.
 */
export default function BlockOptions( {
    props,
    options,
    attributeName,
} ) {

    const {
        attributes,
        setAttributes
    } = props;

    const isActive = attributes[`${attributeName}`];

    return(
        <div className="block-editor-block-styles">
            <div className="block-editor-block-styles__variants">
                { options.map( ( { label, name, isDefault } ) => {

                    return (

                        <Button
                            className={ classnames( 'block-editor-block-styles__item', {
                                    'is-active': typeof isActive === 'undefined' ? isDefault : isActive === name
                                } ) }
                            key={ label }
                            label={ label }
                            variant="secondary"
                            onClick={ () => setAttributes( { [`${attributeName}`]: name } ) }
                        >
                            <Text
                                as="span"
                                limit={ 12 }
                                ellipsizeMode="tail"
                                className="block-editor-block-styles__item-text"
                                truncate
                            >
                                { label }
                            </Text>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}