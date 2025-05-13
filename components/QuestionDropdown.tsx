import { useSafeAreaInsets } from "react-native-safe-area-context"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/rn-reusables/ui/select"
import { useProductState } from "@/state/ProductState"
import { Question } from "@/state/Product"

export function QuestionDropdown(args: { question: Question }) {
  const addCustomization = useProductState(state => state.addCustomization)
  const customizations = useProductState(state => state.customizationOfOrder)
  const insets = useSafeAreaInsets()
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  }
  const currentChoice =
    customizations[args.question.uuid] ??
    args.question.choices[args.question.defaultChoiceIdx]

  return (
    <Select
      defaultValue={{ label: currentChoice, value: currentChoice }}
      onValueChange={data => {
        if (data != null) addCustomization(args.question.uuid, data.label)
      }}
      style={{ marginVertical: 10 }}
    >
      <SelectTrigger>
        <SelectValue
          className="text-foreground text-sm native:text-lg"
          placeholder="Select a fruit"
        />
      </SelectTrigger>
      <SelectContent insets={contentInsets}>
        <SelectGroup>
          <SelectLabel>{args.question.name}</SelectLabel>
          {args.question.choices.map((choice, idx) => (
            <SelectItem label={choice} value={choice} key={idx}>
              {choice}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
