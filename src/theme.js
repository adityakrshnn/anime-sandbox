import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const extendedTheme = extendTheme({ config })

export default extendedTheme