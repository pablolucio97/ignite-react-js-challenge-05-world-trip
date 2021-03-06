import {extendTheme} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: "32em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})


export const theme = extendTheme({
    colors: {
        gray: {
          "400": "#47585B",
          "300": "#999999",
          "200": "#DADADA",
        },
        black:{
            "900": "#000000"
        },
        white:{
            "900":"#FFFFFF"
        },
        yellow:{
          "900":"#FFBA08",
          "200":"#FFBA08"
        }
      },
      fonts: {
        heading: "Poppins",
        body: "Poppins",
      },
      styles: {
        global: {
          body: {
            bg: "white.900",
            color: "gray.400",
            overflowX:'hidden'
          },
        },
      },
      breakpoints
})