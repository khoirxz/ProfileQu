import { Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <nav>
            <Box w="100%" p={7} boxShadow="lg" color="danger" fontFamily="heading">
                <Flex w="90%" m="auto" >
                    <Box>
                        <h1>You Brand</h1>
                    </Box>
                    <Spacer />
                    <Box>
                        List of items
                    </Box>
                </Flex>
            </Box>
        </nav>
    )
}

export default Navbar
