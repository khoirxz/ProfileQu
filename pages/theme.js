import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme ({
    fonts: {
        body: "Cairo, sans-serif",
        heading: "Montserrat, sans-serif",
        mono: "Menlo, monospace",
    },
    colors: {
        danger: '#FF30AA'
    }
})

export default theme