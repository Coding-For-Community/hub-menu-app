import {Stack} from "expo-router";
import {TamaguiProvider} from "tamagui";
import {TAMAGUI_CONFIG} from "@/tamagui.config";

export default function RootLayout() {
	return (
    <TamaguiProvider config={TAMAGUI_CONFIG} >
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-found"/>
      </Stack>
    </TamaguiProvider>
	);
}
