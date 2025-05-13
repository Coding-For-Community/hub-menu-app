import { ScrollView, StyleSheet, Text, useWindowDimensions } from "react-native"
import { DemoProductWidget } from "@/components/ProductWidget"
import { XStack, YStack } from "@/components/XYStack"
import { H1, H3 } from "@/rn-reusables/ui/typography"
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useEffect, useRef } from "react"
import { Separator } from "@/rn-reusables/ui/separator"
import { Button } from "@/rn-reusables/ui/button"
import { useRouter } from "expo-router"
import { useProductState } from "@/state/ProductState"
import { OrderItemView } from "@/components/bottomsheet/OrderItemView"
import { useBackdrop } from "@/components/bottomsheet/useBackdrop"
import { OrderingMode } from "@/state/OrderingMode"

export default function MainMenu() {
  const orderingMode = useProductState(state => state.orderingMode)
  const addToCart = useProductState(state => state.addOrderToCart)
  const clearLastOrder = useProductState(state => state.clearLastOrder)
  const { width } = useWindowDimensions()
  const itemPageRef = useRef<BottomSheetModal>(null)
  const router = useRouter()
  const backdrop = useBackdrop() // see components/bottomsheet/useBackdrop.tsx

  useEffect(() => {
    if (orderingMode === OrderingMode.CREATE_ORDER) {
      itemPageRef.current?.expand()
    }
  }, [orderingMode, itemPageRef.current]) // TODO find out if this works on phone

  return (
    <>
      <H1 style={styles.title}>Order</H1>
      <Separator />
      <ScrollView>
        <YStack>
          <YStack style={styles.section}>
            <H3 style={styles.sectionHeader}>Seasonal Specials</H3>
            <ScrollView horizontal>
              <XStack style={styles.sectionRow}>
                <DemoProductWidget />
                <DemoProductWidget />
                <DemoProductWidget />
                <DemoProductWidget />
              </XStack>
            </ScrollView>
          </YStack>
          <YStack style={styles.section}>
            <H3 style={styles.sectionHeader}>Seasonal Specials</H3>
            <ScrollView horizontal={true}>
              <XStack style={styles.sectionRow}>
                <DemoProductWidget />
                <DemoProductWidget />
              </XStack>
            </ScrollView>
          </YStack>
        </YStack>
      </ScrollView>
      <BottomSheet
        ref={itemPageRef}
        index={-1}
        enablePanDownToClose
        backdropComponent={backdrop}
        onClose={clearLastOrder}
      >
        <OrderItemView />
        <Button
          style={[styles.addToCartBtn, { width: width - 50 }]}
          onPress={() => {
            addToCart()
            itemPageRef.current?.forceClose()
            router.navigate("/(tabs)/Cart")
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Add to Cart</Text>
        </Button>
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  section: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 30,
  },
  sectionRow: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 20,
    marginTop: 10,
    paddingLeft: 15,
  },
  title: {
    marginLeft: 15,
    marginTop: 40,
    marginBottom: 10,
  },
  sectionHeader: {
    marginLeft: 15,
  },
  addToCartBtn: {
    backgroundColor: "blue",
    borderRadius: 60,
    position: "absolute",
    bottom: 10,
    left: 25,
  },
})
