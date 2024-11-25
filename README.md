# react-native-circular-indicator

A simple circular progress indicator component for React Native

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/react-native-circular-indicator
[downloads-image]: http://img.shields.io/npm/dm/react-native-circular-indicator.svg
[npm-image]: http://img.shields.io/npm/v/react-native-circular-indicator.svg

## Screenshots

![](examples/images/screenshot.png)

## Installation

```
yarn add react-native-circular-indicator
```

or

```
npm i react-native-circular-indicator
```

## Examples

```jsx
<CircularIndicator
  size={106}
  percent={75}
  gapAngle={90}
  progressBarColor={[[0, '#2C40F3'], [100, '#C2E1FF']]}
>
  <View>
    <Text>Scores</Text>
    <Text>5846</Text>
  </View>
</CircularIndicator>
```

![](examples/images/demo1.png)

```jsx
<CircularIndicator
  size={106}
  percent={41}
  progressBarColor={[[0, '#1CC490'], [100, '#CEFFBD']]}
  scaleAngles={[0, -45, -90, -135, 180]}
  scaleOpacity={0.15}
  scaleColor='#888'
>
  <View>
    <Text>41%</Text>
  </View>
</CircularIndicator>
```

![](examples/images/demo2.png)

```jsx
<CircularIndicator
  size={106}
  percent={75}
  progressBarColor={[[0, '#9C3AE9'], [100, '#CCBDFF']]}
  scaleAngles={[0, -45, -90, -135, 180]}
  scaleOpacity={0.15}
>
  <View>
    <Text>Status</Text>
    <Text>Good</Text>
  </View>
</CircularIndicator>
```

![](examples/images/demo3.png)

## API

| prop      | type  | default value |
| --------- | ------------- | ------------- |
| `size`    | `number` |     |
| `percent` | `number` | 1 |
| `gapAngle` | `number` | 90 |
| `backgroundBarColor` | `string` | '#F5F5F4' |
| `progressBarWidth` | `number` | 15 |
| `progressBarColor` | `string` `[number, string][]` | '#2C40F3' |
| `progressBarOpacity` | `number` | 1 |
| `progressFillColor` | `string` | 'none' |
| `scaleAngles` | `number[]` |  |
| `scaleWidth` | `number` | 2 |
| `scaleColor` | `string` | '#2a2a2a' |
| `scaleOpacity` | `number` | 0.1 |
| `svgProps` | `Record<string, any>` | {} |
