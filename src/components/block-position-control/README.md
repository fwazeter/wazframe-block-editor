# Block Position Toolbar

The `BlockPositionToolbar` component renders block position options in the editor.
The different options available are `absolute`, `relative` and `fixed`. The CSS attribute `position` controls positional context & placement
of elements, typically to be used to place elements on top of one another or create buttons or dialog that 'pop up.'

## Props

| Name         | Type     | Required | Default                      | Options                                                              | Description                                                                                            |
|--------------|----------|----------|------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **value**    | String   | Yes      | undefined                    | `none`, `relative`, `fixed`                                          | Current value of the position setting. By default you can only choose options from the options listed. |
| **onChange** | Function | Yes      | N/A                          | Calls `none`, `relative`, `fixed` as new value as the only argument. | Callback function invoked when the toolbar's position value is changed via interaction with buttons.   |
| **controls** | Array | No       | `none`, `relative`, `static` | `[ 'none', 'absolute', 'relative', 'fixed', 'sticky', 'static' ]` | Array containing the name of position properties. If none passed, defaults to an array of `none, relative, fixed`. | 

### Example usage

**onChange**
```js
const updatePositionType = ( nextPosition ) => {
        if ( ! nextPosition ) {
            nextPosition = undefined;
        }
        setAttributes( { positionType: nextPosition } );
    }
```

**controls**

```js

const NEW_CONTROLS = [ 'none', 'relative', 'fixed', 'sticky' ];

```

**implementation**

In this example we're wrapping the component in WordPress's `<BlockControls>` component.

```js
import { BlockControls } from "@wordpress/block-editor";

<BlockControls>
    <BlockPositionControl
        value={ positionType }
        onChange={ updatePositionType }
        controls={ NEW_CONTROLS }
    />
</BlockControls>
```

## Example Usage: `Imposter` Block

The original usage is inside the `wazframe/imposter` block to toggle between a default status of `position: absolute` and
either `position: relative` or `position: fixed`. The plan is to allow for this component to be hooked into via the
editor for usage on other blocks to set their positioning to `relative` as a parent container to the `wazframe/imposter` block or
in more complex blocks developed later.

## TODO

Allow for info hint to be changed and the titling of the default `'none'` option. Currently defaults to a message suitable for the `wazframe/imposter` block,
but we ultimately want this toolbar to be used on other complex blocks.

**Create Hook**

Along with other components, creating a hook system to enable other blocks to simply be wrapped by edit and save functions
of this component is ideal.


