import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, Line, LinearGradient, Stop } from 'react-native-svg';
import { SvgProgressProps } from './svgProgressProps'
import styles from './styles'

const SvgProgress = (props: SvgProgressProps) => {
  const {
    style = {},
    svgProps = {},
    size,
    percent = 1,
    gapAngle = 90,
    backgroundBarColor = '#F5F5F4',
    progressBarWidth = 15,
    progressBarColor = '#2C40F3',
    progressBarOpacity = 1,
    progressFillColor = 'none',
    scaleAngles,
    scaleWidth = 2,
    scaleColor = '#2a2a2a',
    scaleOpacity = 0.1,
    children,
  } = props

  const radius = (size - progressBarWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const isLinearGradientColor = typeof progressBarColor !== 'string'

  const renderBackgroundCircle = () => {
    const gapLength = (gapAngle / 360) * circumference
    const progressLength = circumference - gapLength
    const dashArray = `${progressLength}, ${gapLength}`

    return (
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={backgroundBarColor}
        strokeWidth={progressBarWidth}
        strokeDasharray={dashArray}
        strokeDashoffset={0}
        fill="none"
        strokeLinecap="round"
        transform={`rotate(${90 + gapAngle / 2} ${size / 2} ${size / 2})`}
      />
    );
  };

  const renderCircularProgress = () => {
    const gapLength = (gapAngle / 360) * circumference
    const progressLength = (percent / 100) * (circumference - gapLength)
    const dashArray = `${progressLength}, ${circumference - progressLength}`

    return (
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={isLinearGradientColor ? 'url(#progressGrad)' : progressBarColor}
        strokeWidth={progressBarWidth}
        strokeDasharray={dashArray}
        strokeDashoffset={0}
        fill={progressFillColor}
        strokeLinecap="round"
        strokeOpacity={progressBarOpacity}
        transform={`rotate(${90 + gapAngle / 2} ${size / 2} ${size / 2})`}
      />
    )
  }

  const renderScaleAngles = () => {
    if (!scaleAngles) return null
    return scaleAngles.map((angle, index) => {
      const radian = (angle * Math.PI) / 180;
      const halfSrokeWidth = progressBarWidth / 2
      const x1 = size / 2 + (radius + halfSrokeWidth) * Math.cos(radian);
      const y1 = size / 2 + (radius + halfSrokeWidth) * Math.sin(radian);
      const x2 = size / 2 + (radius - halfSrokeWidth) * Math.cos(radian);
      const y2 = size / 2 + (radius - halfSrokeWidth) * Math.sin(radian);
      return (
        <Line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={scaleColor}
          strokeWidth={scaleWidth}
          strokeOpacity={scaleOpacity}
        />
      );
    })
  }

  const renderDefs = () => {
    if (!isLinearGradientColor) return null

    const linearGradientProps = progressBarColor.reduce((acc: Record<string, string>, cur, index) => {
      acc[`x${index + 1}`] = `${cur[0]}%`
      acc[`y${index + 1}`] = '0%'
      return acc
    }, {})
    return (
      <Defs>
        <LinearGradient id="progressGrad" {...linearGradientProps}>
          {progressBarColor.map((item, index) => (
            <Stop key={index} offset={`${item[0]}%`} stopColor={item[1]} stopOpacity="1" />
          ))}
        </LinearGradient>
      </Defs>
    )
  }

  const renderContent = () => {
    if (typeof children === 'function') {
      return children({ percent })
    }
    return children
  }

  const containerStyle = [
    styles.container,
    {
      width: size,
      height: size,
    },
    style
  ]

  return (
    <View style={containerStyle}>
      <Svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} {...svgProps}>
        {renderDefs()}
        {renderBackgroundCircle()}
        {renderCircularProgress()}
        {renderScaleAngles()}
      </Svg>
      {renderContent()}
    </View>
  );
};

export default SvgProgress;
