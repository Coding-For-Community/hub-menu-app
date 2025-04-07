import { XStack, YStack } from "@/components/XYStack";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/rn-reusables/ui/card";
import { Image, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProductOrder } from "@/state/ProductOrder";


export function CheckoutItem(args: {order: ProductOrder}) {
    const formattedOptions: string[] = []
    for (var key in args.order.customization) {
        formattedOptions.push(String(args.order.customization[key]))
    }
    return (
        <Card style={{borderRadius: 0}}>
            <XStack>
                <Image 
                    source={require("../assets/images/coffee.jpeg")}    
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        marginLeft: 10,
                        marginTop: 15
                    }}
                />
                <YStack>
                    <CardHeader smallLeftMargin>
                        <CardTitle>Latte</CardTitle>
                        <CardDescription>{args.order.size}</CardDescription>
                    </CardHeader>
                    <CardContent smallLeftMargin>
                        { 
                            formattedOptions.map(option => <Text>{option}</Text>) 
                        }
                    </CardContent>
                    <CardFooter smallLeftMargin>
                        <XStack style={{alignItems: "center", gap: 20}}>
                            <Feather name="edit-2" size={20} color="black" />
                            <MaterialIcons name="delete-outline" size={24} color="black"  />
                            <Ionicons name="duplicate-outline" size={24} color="black" />
                        </XStack>
                    </CardFooter>
                </YStack>
                <Text style={{
                    textAlign: "right",
                    fontWeight: "500",
                    fontSize: 20,
                    width: "100%",
                    marginRight: 10,
                    marginTop: 15
                }}>$10.95</Text>
            </XStack>
        </Card>
    )
}