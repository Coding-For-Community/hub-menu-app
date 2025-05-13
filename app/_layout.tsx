import "~/global.css"

import {
  Theme,
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { Platform } from "react-native"
import { NAV_THEME } from "~/rn-reusables/lib/constants"
import { useColorScheme } from "~/rn-reusables/lib/useColorScheme"
import { verifyInstallation } from "nativewind"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { PortalHost } from "@rn-primitives/portal"

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export default function RootLayout() {
  const hasMounted = React.useRef(false)
  const { setColorScheme } = useColorScheme()
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return
    }

    if (Platform.OS === "web") {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add("bg-background")
    }
    setIsColorSchemeLoaded(true)
    hasMounted.current = true
  }, [])

  if (!isColorSchemeLoaded) {
    return null
  }

  verifyInstallation()
  setColorScheme("light")

  // GestureHandlerRootView allows for react-native-bottom-sheet to work,
  // while ThemeProvider allows useTheme() to return the proper theme within components,
  // and PortalHost enables dropdown support.
  return (
    <>
      <GestureHandlerRootView>
        <ThemeProvider value={LIGHT_THEME}>
          <StatusBar style={"light"} />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </GestureHandlerRootView>

      <PortalHost />
    </>
  )
}

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? React.useEffect
    : React.useLayoutEffect
