import { Tabs } from "expo-router"
import Feather from "@expo/vector-icons/Feather"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useProductState } from "@/state/ProductState"
import { OrderingMode } from "@/state/OrderingMode"

export default function TabLayout() {
  const orderingMode = useProductState(state => state.orderingMode)
  return (
    <Tabs
      screenOptions={{
        tabBarStyle:
          orderingMode === OrderingMode.NONE ? {} : { display: "none" },
      }}
    >
      <Tabs.Screen
        name="MainMenu"
        options={{
          title: "Order",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="coffee" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="shopping-cart"
              size={size}
              color={color}
              style={{ marginRight: 5 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="UserProfile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="Admin" />
    </Tabs>
  )
}
