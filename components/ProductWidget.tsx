import { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Circle, Image, Sheet, SheetProps, Text, YStack } from "tamagui";

export function ProductWidget() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <YStack alignItems="center" onPress={() => setModalOpen(true)}>
                <Image source={require("../assets/images/coffee.jpeg")} style={styles.productImg}/>
                <Text>Latte</Text>
            </YStack>

            {/* <Sheet /> */}

            <Sheet animation="medium" open={modalOpen} onOpenChange={setModalOpen}>
                <Sheet.Overlay
                    animation="lazy"
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                />
                <Sheet.Handle />
                <Sheet.Frame style={styles.modal}>
                    <SheetContents closeModal={() => setModalOpen(false)} />
                </Sheet.Frame>
            </Sheet>
        </>
    )
}

const SheetContents = memo(SheetContentsImpl)
function SheetContentsImpl(args: {closeModal: () => void}) {
    return (
        <View>
            <Text>Tbd...</Text>
            <Button onPress={args.closeModal}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    productImg: { 
        width: 120, 
        height: 120, 
        borderRadius: 60 
    }
})