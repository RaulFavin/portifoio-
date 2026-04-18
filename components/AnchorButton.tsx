import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { Icon, IconNames } from "./icons";

const variants = {
  outline: 'border border-primary text-primary hover:opacity-90 focus:ring-4 focus:ring-primary/50 transition-colors',
  fill: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 focus:ring-primary/50',
} as const

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof variants
  headIcon?: IconNames
}

export function AnchorButton(props: PropsWithChildren<AnchorButtonProps>) {
  const {
    children,
    className,
    variant = 'fill',
    headIcon,
    ...otherProps
  } = props

  const currentVariant = variants[variant]

  return (
    <a
      {...otherProps}
      className={cn(
        currentVariant,
        'px-[32px] py-[12px] text-md uppercase font-sans! font-semibold outline-none whitespace-nowrap flex items-center gap-2 leading-none',
        className,
      )}
    >
      {children}
      {headIcon && (
        <Icon name={headIcon} size={16} />
      )}
    </a>
  )
}
