import {createTamagui} from "@tamagui/core";
import {createTokens} from "tamagui";
import {defaultConfig} from "@tamagui/config/v4";

const tokens = createTokens({
    color: {
        white: '#fff',
        black: '#000',
    },
})

export const TAMAGUI_CONFIG = createTamagui({
    ...defaultConfig,
    tokens,
    settings: {
        styleCompat: "react-native"
    }
})

type CustomConfig = typeof TAMAGUI_CONFIG
// ensure types work
declare module 'tamagui' {
    interface TamaguiCustomConfig extends CustomConfig {}
}