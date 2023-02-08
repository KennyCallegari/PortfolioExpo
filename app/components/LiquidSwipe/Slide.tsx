import Color from "color"
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ViewStyle,
  RegisteredStyle,
  ImageStyle,
  TextStyle,
} from "react-native"
import Svg, { RadialGradient, Defs, Rect, Stop } from "react-native-svg"
import { typography } from "../../theme"

export interface Slide {
  color: string
  title: string
  description: string
  picture: ReturnType<typeof require>
}

export interface SlideProps {
  slide: Slide
}

export function Slide(props: SlideProps) {
  const {
    slide: { picture, color, title, description },
  } = props
  const lighterColor = Color(color).lighten(0.2).toString()

  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="50%">
            <Stop offset="0%" stopColor={color} />
            <Stop offset="100%" stopColor={lighterColor} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={$containerStyle}>
        <View style={$imageContainerStyle}>
          <Image source={picture} style={$imageStyle} />
        </View>
        <View>
          <Text style={$titleStyle}>{title}</Text>
          <Text style={$descriptionStyle}>{description}</Text>
        </View>
      </View>
    </>
  )
}

export default Slide

const { width, height } = Dimensions.get("screen")
const SIZE = width - 140

const $containerStyle: ViewStyle = {
  // ...StyleSheet.absoluteFillObject,
  paddingHorizontal: 75,
  paddingTop: 25,
  alignItems: "center",
}
const $imageContainerStyle: ViewStyle = {}
const $imageStyle: ImageStyle = {
  width: 120,
  height: 120,
  borderRadius: 32,
}
const $titleStyle: TextStyle = {
  fontSize: 48,
  color: "white",
  textAlign: "center",
  marginBottom: 16,
  fontFamily: typography.primary.bold,
}
const $descriptionStyle: TextStyle = {
  fontSize: 18,
  color: "white",
  textAlign: "center",
  fontFamily: typography.primary.normal,
}
