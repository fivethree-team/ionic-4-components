# fiv-item-expandable

## Properties
| Property          | Attribute          | Description       | Type                                           |
| ------------------ | ------------------ | ------------------| ------------------|
| `color`      | `color`      | Color used for the item. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.    | `Color` |
| `disabled`      | `disabled`      | If true, the user cannot interact with the item. Defaults to `false`.    | `boolean` |
| `expanded`      | `expanded`      | If true, the content is expanded and visible to the user. Defaults to `false`.    | `boolean` |
| `icon`      | `icon`      | How the bottom border should be displayed on the item. Available options: "full", "inset", "none".    | `string` |
| `iconAnimated`      | `icon-animated`      | Icon rotating 180° when toggling the content. Defaults to `arrow-down`.    | `string` |
| `iconAnimatedSlot`      | `icon-animated-slot`      | Slot to position the icon in the item. Defaults to `end`.    | `start`, `end` |
| `iconSlot`      | `icon-slot`      | Slot to position the icon in the item. Defaults to `start`.    | `start`, `end` |
| `lines`      | `lines`      | How the bottom border should be displayed on the item. Available options: "full", "inset", "none".    | "full", "inset", "none" |
| `text`      | `text`      | Text displayed in the item.    | `string` |

## Events

| Property          | Description       | Type    |
|------------------| ------------------| ------------------|
| `fivExpand`      |  Emitted when the `expanded` state changes.   | `boolean` |