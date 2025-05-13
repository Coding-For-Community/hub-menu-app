import { StyleProp, TextStyle, ViewStyle } from "react-native"

/**
 * Utility stylesheet params to make an HTML element take up the
 * full width of the viewport(patching the text overflow bug of react native)
 */
export const OCCUPY_FULL_WIDTH: StyleProp<TextStyle & ViewStyle> = {
  flex: 1,
  flexShrink: 1,
  width: "100%",
}
