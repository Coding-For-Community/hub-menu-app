import { Button } from "@/rn-reusables/ui/button";
import { Text } from "@/rn-reusables/ui/text";
import { ReactNode } from "react";
import { ColorValue } from "react-native";

export function PayingButton(args: {bgColor: ColorValue, children?: ReactNode}) {
    return (
        <Button style={{backgroundColor: args.bgColor, marginTop: 18, borderRadius: 50, padding: 23}}>
            <Text style={{color: "white", fontSize: 18.5}}>{args.children}</Text>
        </Button>
    )
}