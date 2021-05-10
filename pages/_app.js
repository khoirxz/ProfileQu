import { ChakraProvider, } from '@chakra-ui/react'

import './styles.css'
import theme from './theme'

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>

            <Component {...pageProps} />

        </ChakraProvider>
    )
}