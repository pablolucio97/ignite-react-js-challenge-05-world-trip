import {extendTheme} from '@chakra-ui/react'


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
})