import { Button } from "@/rn-reusables/ui/button"
import { Text } from "@/rn-reusables/ui/text"
import { memo, ReactNode } from "react"
import { ColorValue } from "react-native"

export const PayingButton = memo(PayingButtonImpl)

function PayingButtonImpl(args: { bgColor: ColorValue; children?: ReactNode }) {
  return (
    <Button
      style={{
        backgroundColor: args.bgColor,
        marginTop: 18,
        borderRadius: 50,
        padding: 23,
      }}
    >
      <Text style={{ color: "white", fontSize: 18.5 }}>{args.children}</Text>
    </Button>
  )
}
