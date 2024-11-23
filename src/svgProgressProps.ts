import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type ColorPoint = [number, string];

export interface SvgProgressProps {
  style?: StyleProp<ViewStyle>;
  size: number;
  // defaults to 1
  percent?: number;
  // defaults to 90
  gapAngle?: number;
  // defaults to '#F5F5F4'
  backgroundBarColor?: string;
  // defaults to 15
  progressBarWidth?: number;
  // defaults to '#2C40F3'
  progressBarColor?: string | ColorPoint[];
  // defaults to 1
  progressBarOpacity?: number;
  // defaults to 'none'
  progressFillColor?: string;
  scaleAngles?: number[];
  // defaults to 2
  scaleWidth?: number;
  // defaults to '#2a2a2a'
  scaleColor?: string;
  // defaults to 0.1
  scaleOpacity?: number;
  svgProps?: Record<string, any>;
  children?: React.ReactElement | ((props: any) => React.ReactElement<any>);
}