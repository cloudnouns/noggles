# Noggles.js

![Noggles](/static/banner.png)

Noggles is a lightweight library for creating SVG-based [Nouns-style](https://nouns.wtf) glasses.

- ✅ Supports official Nouns colors and custom color palettes
- 🔥 Framework agnostic—works with React, Vue, Svelte, and vanilla JS
- 🌈 Animate through the [colors of the rainbow](#rainbow)

Follow the quick start instruction below to get started.

## Quickstart

Noggles is available as a JavaScript package and can be installed with your favorite package manager...

```bash
npm install noggles
# or
yarn add noggles
```

... imported into your project...

```js
import { Noggles } from 'noggles';

const noggle = Noggles.random(); // colors chosen at random
```

... and referenced in your markup.

```jsx
<img src={noggle} alt="noggles" />
```

## Usage

Each method accepts and an optional object with the following properties:

- `static`: Controls the shape of the SVG. When `true`, a square SVG is returned with the noggles placed in their standard position. `true` or `false` (default)
- `eyeDirection`: Controls the direction of the eyes. `forward` (default) or `backward`

### Official colors

`Noggles.id(i)`

`Noggles.color('x')`

Choose noggles based on their id or name. See [trait reference](#trait-reference) for id and color options.

`.id()` accepts an integer as the first parameter and an [optional object](#usage) as the second parameter.

`.color()` accepts a string as the first parameter and an [optional object](#usage) as the second parameter.

Example

```js
// frog green noggles
const n = Noggles.id(6); // or
const n1 = Noggles.color('frog-green');

// or with optional props
const n2 = Noggles.id(6, {
	static: // true of false
	eyeDirection: // 'forward' or 'backward'
});
const n3 = Noggles.color('frog-green', {
	static: // true of false
	eyeDirection: // 'forward' or 'backward'
});
```

### Random colors

`Noggles.random()`

Noggle colors are chosen at random. In addition to the [standard options](#usage), the following properties can also be optionally passed:

- `restrictColors`: When `true`, only chooses colors from the official palette. `true` or `false` (default)
- `multicolor`: Controls whether dual-tone noggles are generated. `true` or `false`. ignored by default.
- `eyes`: Controls the colors of the eyes. Must be a array with two valid color strings. default: `['#fff','#000']`

Example

```js
const n = Noggles.random();

// or with optional props
const n1 = Noggles.random({
	static: // true of false
	eyeDirection: // 'forward' or 'backward'
	eyes: // [color, color]
	restrictColors: // true or false
	multicolor: //true or false
});
```

### Custom colors

`Noggles.customColor('color')`

`Noggles.customColor(['color','color'])`

Customize noggles colors. Accepts a string or array of strings as the first parameter. Colors must be valid color strings, such as `hex`, `rgb`, `rgba`, `hsl`, `hsla`, or [HTML color name](https://www.w3schools.com/tags/ref_colornames.asp).

In addition to the [standard options](#usage), the following properties can also be optionally passed:

- `eyes`: Controls the colors of the eyes. Must be a array with two valid color strings. default: `['#fff','#000']`

Example

```js
const n = Noggles.customColor('#ff7f50');
const n1 = Noggles.customColor(['#ff7f50', '#6495ed']);

// or with optional props
const n2 = Noggles.customColor('#ff7f50', {
	static: // true of false
	eyeDirection: // 'forward' or 'backward'
	eyes: // [color, color]
});
const n3 = Noggles.customColor(['#ff7f50', '#6495ed'],  {
	static: // true of false
	eyeDirection: // 'forward' or 'backward'
	eyes: // [color, color]
});
```

### Rainbow

`Noggles.rainbow()`

Noggles that animate through the colors of the rainbow. Accepts an [optional object](#usage) as the only parameter.

Example

```js
const n = Noggles.rainbow();

// or with optional props
const n1 = Noggles.rainbow({
	static: // true of false
	eyeDirection: // 'forward' or 'backward'
});
```

## Trait reference

| id  | name                  |
| --- | --------------------- |
| 0   | `hip-rose`            |
| 1   | `black-eyes-red`      |
| 2   | `black-rgb`           |
| 3   | `black`               |
| 4   | `blue-med-saturated`  |
| 5   | `blue`                |
| 6   | `frog-green`          |
| 7   | `fullblack`           |
| 8   | `green-blue-multi`    |
| 9   | `grey-light`          |
| 10  | `guava`               |
| 11  | `honey`               |
| 12  | `magenta`             |
| 13  | `orange`              |
| 14  | `pink-purple-multi`   |
| 15  | `red`                 |
| 16  | `smoke`               |
| 17  | `teal`                |
| 18  | `watermelon`          |
| 19  | `yellow-orange-multi` |
| 20  | `yellow-saturated`    |

## Todo

- [ ] custom color sunglasses
- [ ] blink animation
