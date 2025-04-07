import { Question, useProductState } from "@/state/Product";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/rn-reusables/ui/select';

export function DropdownSelect(args: {question: Question}) {
    const addUserResponse = useProductState(state => state.addUserResponse)
    const userResponses = useProductState(state => state.currentOrder)
    const insets = useSafeAreaInsets();
	const contentInsets = {
		top: insets.top,
		bottom: insets.bottom,
		left: 12,
		right: 12,
	}; 
    const currentChoice = userResponses[args.question.uuid] ?? args.question.choices[args.question.defaultChoiceIdx]

    return (
        <Select 
            defaultValue={{ label: currentChoice, value: currentChoice }} 
            onValueChange={data => {
                if (data != null) addUserResponse(args.question.uuid, data.label)
            }}
            style={{marginVertical: 10}}
        >
            <SelectTrigger>
                <SelectValue
                    className='text-foreground text-sm native:text-lg'
                    placeholder='Select a fruit'
                />
            </SelectTrigger>
            <SelectContent insets={contentInsets}>
                <SelectGroup>
                    <SelectLabel>{args.question.name}</SelectLabel>
                    {
                        args.question.choices.map(choice => (
                            <SelectItem label={choice} value={choice}>{choice}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}