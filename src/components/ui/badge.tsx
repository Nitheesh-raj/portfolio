import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary/50 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-primary hover:border-primary hover:bg-primary/40 backdrop-blur-sm",
        secondary: "border-secondary/50 bg-gradient-to-r from-purple-400/30 to-purple-500/30 text-secondary hover:border-secondary hover:bg-secondary/40 backdrop-blur-sm",
        destructive: "border-destructive/50 bg-destructive/20 text-destructive hover:bg-destructive/30 backdrop-blur-sm",
        outline: "border-primary/40 text-primary hover:border-primary/70 hover:bg-primary/10 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
