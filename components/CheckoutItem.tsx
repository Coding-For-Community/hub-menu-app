import { XStack, YStack } from "@/components/XYStack"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/rn-reusables/ui/card"
import { Image, StyleSheet, Text } from "react-native"
import Feather from "@expo/vector-icons/Feather"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import { ProductOrder } from "@/state/ProductOrder"
import { PressableIcon } from "./icons/PressableIcon"
import { useProductState } from "@/state/ProductState"
import { OCCUPY_FULL_WIDTH } from "./occupyFullWidth"

export function CheckoutItem(args: {
    order: ProductOrder
    orderIndex: number
}) {
    const removeOrder = useProductState(state => state.removeOrder)
    const duplicateOrder = useProductState(state => state.duplicateOrder)
    const editOrder = useProductState(state => state.editOrder)

    const formattedOptions: string[] = []
    for (var key in args.order.customization) {
        formattedOptions.push(args.order.customization[key])
    }

    return (
        <Card style={{ borderRadius: 0 }}>
            <XStack>
                <Image
                    source={require("../assets/images/coffee.jpeg")}
                    style={styles.productImg}
                />
                <YStack>
                    <CardHeader smallLeftMargin>
                        <CardTitle style={{ fontSize: 25 }}>
                            {args.order.product.name}
                        </CardTitle>
                        <CardDescription style={{ fontSize: 14 }}>
                            {args.order.size}
                        </CardDescription>
                    </CardHeader>
                    <CardContent smallLeftMargin>
                        {formattedOptions.map((option, idx) => (
                            <Text key={idx} style={{ fontSize: 15 }}>
                                {option}
                            </Text>
                        ))}
                    </CardContent>
                    <CardFooter smallLeftMargin>
                        <XStack style={{ alignItems: "center", gap: 20 }}>
                            <PressableIcon
                                onPress={() => editOrder(args.orderIndex)}
                            >
                                <Feather
                                    name="edit-2"
                                    size={24}
                                    color="black"
                                />
                            </PressableIcon>
                            <PressableIcon
                                onPress={() => removeOrder(args.orderIndex)}
                            >
                                <MaterialIcons
                                    name="delete-outline"
                                    size={29}
                                    color="black"
                                />
                            </PressableIcon>
                            <PressableIcon
                                onPress={() => duplicateOrder(args.orderIndex)}
                            >
                                <Ionicons
                                    name="duplicate-outline"
                                    size={28}
                                    color="black"
                                />
                            </PressableIcon>
                        </XStack>
                    </CardFooter>
                </YStack>
                <Text style={[OCCUPY_FULL_WIDTH, styles.priceText]}>
                    ${args.order.product.priceDollars}
                </Text>
            </XStack>
        </Card>
    )
}

const styles = StyleSheet.create({
    productImg: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 15,
        marginTop: 15,
    },
    priceText: {
        textAlign: "right",
        fontWeight: "500",
        fontSize: 20,
        marginTop: 15,
        marginRight: 15,
    },
})
