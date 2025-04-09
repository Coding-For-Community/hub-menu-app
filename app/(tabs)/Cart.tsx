import { CheckoutItem } from "@/components/CheckoutItem";
import { XStack, YStack } from "@/components/XYStack";
import { H1, H3 } from "@/rn-reusables/ui/typography";
import { DUMMY_PRODUCT } from "@/state/Product";
import { Separator } from "@/rn-reusables/ui/separator";
import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from "@/rn-reusables/ui/button";
import { Text } from "@/rn-reusables/ui/text";
import { PayingButton } from "@/components/PayingButton";
import { useProductState } from "@/state/ProductState";


export default function Cart() {
	const [date, setDate] = useState(new Date(1000000))
	const [showDatePicker, setDatePickerOpen] = useState(false)
	const cart = useProductState(state => state.cart)
	if (cart.length === 0) {
		return (
			<YStack style={{marginBottom: 10}}>
				<H1 style={styles.title}>Checkout</H1>
				<Separator />
				<H3 style={{margin: 15}}>No items yet; go order some!</H3>
			</YStack>
		)
	}

	const priceWithoutTax = cart.map(order => order.product.priceDollars).reduce((a, b) => a + b)
	const tax = priceWithoutTax * 0.06
	const totalPrice = priceWithoutTax + tax

	return (
		<>
			<YStack style={{marginBottom: 10}}>
				<H1 style={styles.title}>Checkout</H1>
				<Separator />
				{
					cart.map((order, idx) => <CheckoutItem order={order} orderIndex={idx} />)
				}
			</YStack>

			<YStack style={{margin: 15, marginLeft: 100}}>
				<XStack>
					<Text>Subtotal</Text>
					<Text style={{width: "100%"}} numberOfLines={1}>...........................................................................................................................................................................................................................................................................................................................................................................................................................................</Text>
					<Text>${priceWithoutTax}</Text>
				</XStack>
				<XStack>
					<Text>Tax</Text>
					<Text style={{width: "100%"}} numberOfLines={1}>...........................................................................................................................................................................................................................................................................................................................................................................................................................................</Text>
					<Text>${tax.toFixed(2)}</Text>
				</XStack>
				<XStack style={{marginBottom: 10}}>
					<H3>Total</H3>
					<H3 style={{width: "100%"}} numberOfLines={1}>...........................................................................................................................................................................................................................................................................................................................................................................................................................................</H3>
					<H3>${totalPrice.toFixed(2)}</H3>
				</XStack>

				{/* <Button 
					style={{backgroundColor: "skyblue", marginTop: 20, borderRadius: 50}}
					onPress={() => setDatePickerOpen(true)}
				>
					<Text>Complete By: {date.getHours()}:{date.getMinutes()}</Text>
				</Button> */}

				<PayingButton bgColor="skyblue">Pay with credit/debit card</PayingButton>
				<PayingButton bgColor="blue">Pay with student account</PayingButton>
				<PayingButton bgColor="goldenrod">Pay with apple pay</PayingButton>
			</YStack>

			{
				showDatePicker &&
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={"time"}
					is24Hour={false}
					onChange={ (_, selectedDate) => {
						if (selectedDate != null) setDate(selectedDate)
					}}
				/>
			}
		</>
	)
}


const styles = StyleSheet.create({
	title: {
        marginLeft: 15,
        marginTop: 40,
        marginBottom: 10
    },
	bottomBtn: {
		width: 250,
		marginTop: 20,
		borderRadius: 50
	}
})
