import { XStack, YStack } from "@/components/XYStack";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/rn-reusables/ui/card";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProductOrder } from "@/state/ProductOrder";
import { PressableIcon } from "./icons/PressableIcon";
import { useProductState } from "@/state/ProductState";


export function CheckoutItem(args: {order: ProductOrder, orderIndex: number}) {
    const removeOrder = useProductState(state => state.removeOrder)
    const duplicateOrder = useProductState(state => state.duplicateOrder)

    const formattedOptions: string[] = []
    for (var key in args.order.customization) { 
        formattedOptions.push(args.order.customization[key])
    }
    
    return (
        <Card style={{borderRadius: 0}} key={args.orderIndex}>
            <XStack>
                <Image 
                    source={require("../assets/images/coffee.jpeg")}    
                    style={styles.productImg}
                />
                <YStack>
                    <CardHeader smallLeftMargin>
                        <CardTitle>{args.order.product.name}</CardTitle>
                        <CardDescription>{args.order.size}</CardDescription>
                    </CardHeader>
                    <CardContent smallLeftMargin>
                        { 
                            formattedOptions.map((option, idx) => <Text key={idx}>{option}</Text>) 
                        }
                    </CardContent>
                    <CardFooter smallLeftMargin>
                        <XStack style={{alignItems: "center", gap: 20}}>
                            <PressableIcon>
                                <Feather name="edit-2" size={20} color="black" />
                            </PressableIcon>
                            <PressableIcon onPress={() => removeOrder(args.orderIndex)}>
                                <MaterialIcons name="delete-outline" size={24} color="black" />
                            </PressableIcon>
                            <PressableIcon onPress={() => duplicateOrder(args.orderIndex)}>
                                <Ionicons name="duplicate-outline" size={23} color="black" />
                            </PressableIcon>
                        </XStack>
                    </CardFooter>
                </YStack>
                <Text style={styles.priceText}>${args.order.product.priceDollars}</Text>
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
        marginTop: 15
    },
    priceText: {
        textAlign: "right",
        fontWeight: "500",
        fontSize: 20,
        width: "100%",
        marginRight: 15,
        marginTop: 15
    }
})