import { ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function ButtonLoading({children,className}:any) {
  return (
    <Button disabled className={className?className:''}>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </Button>
  )
}
