import type { TextRef, ViewRef } from "@rn-primitives/types"
import * as React from "react"
import { Text, type TextProps, View, type ViewProps } from "react-native"
import { cn } from "@/rn-reusables/lib/utils"
import { TextClassContext } from "@/rn-reusables/ui/text"

interface CardProps extends ViewProps {
  smallLeftMargin?: boolean
}

const Card = React.forwardRef<ViewRef, CardProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-card shadow-sm shadow-foreground/10",
        className,
      )}
      {...props}
    />
  ),
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<ViewRef, CardProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        `flex flex-col space-y-1.5 p-6 pl-${props.smallLeftMargin ? 4 : 6}`,
        className,
      )}
      {...props}
    />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<TextRef, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      role="heading"
      aria-level={3}
      ref={ref}
      className={cn(
        "text-2xl text-card-foreground font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<TextRef, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  ),
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<ViewRef, CardProps>(
  ({ className, ...props }, ref) => {
    const cls = props.smallLeftMargin ? "p-6 pt-0 pl-4" : "p-6 pt-0"
    return (
      <TextClassContext.Provider value="text-card-foreground">
        <View ref={ref} className={cn(cls, className)} {...props} />
      </TextClassContext.Provider>
    )
  },
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<ViewRef, CardProps>(
  ({ className, ...props }, ref) => {
    const cls = props.smallLeftMargin
      ? "flex flex-row items-center p-6 pt-0 pl-4 pb-4"
      : "flex flex-row items-center p-6 pt-0"
    return <View ref={ref} className={cn(cls, className)} {...props} />
  },
)
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
