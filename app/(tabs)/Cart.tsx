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


export default function Cart() {
	const [date, setDate] = useState(new Date(1000000))
	const [showDatePicker, setDatePickerOpen] = useState(false)

	return (
		<>
			<YStack style={{marginBottom: 10}}>
				<H1 style={styles.title}>Checkout</H1>
				<Separator />
				<CheckoutItem order={{
					product: DUMMY_PRODUCT,
					size: "large",
					customization: {
						"skldfjlsdf": "hello",
						"sdfddfd": "goodbye"
					}
				}} />
			</YStack>

			<YStack style={{margin: 10, marginLeft: 100}}>
				<XStack>
					<Text>Subtotal</Text>
					<Text style={{width: "100%"}} numberOfLines={1}>...........................................................................................................................................................................................................................................................................................................................................................................................................................................</Text>
					<Text>$10.95</Text>
				</XStack>
				<XStack>
					<Text>Tax</Text>
					<Text style={{width: "100%"}} numberOfLines={1}>...........................................................................................................................................................................................................................................................................................................................................................................................................................................</Text>
					<Text>$10000</Text>
				</XStack>
				<XStack style={{marginBottom: 10}}>
					<H3>Total</H3>
					<H3 style={{width: "100%"}} numberOfLines={1}>...........................................................................................................................................................................................................................................................................................................................................................................................................................................</H3>
					<H3>$10.95</H3>
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
