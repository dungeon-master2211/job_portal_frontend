import { Alert, AlertDescription } from "@/components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"
export function AlertCommon({message}:any) {
    return (
      <Alert>
        <RocketIcon className="h-4 w-4" />
        {/* <AlertTitle></AlertTitle> */}
        <AlertDescription>
          {message}
        </AlertDescription>
      </Alert>
    )
  }