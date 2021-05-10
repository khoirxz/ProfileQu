import { Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav>
            <Box w="100%" p={7} boxShadow="lg" fontFamily="heading">
                <Flex w="90%" m="auto" >
                    <Box>
                        <h1>You Brand</h1>
                    </Box>
                    <Spacer />
                    <Box>
                        <Flex>
                            <Link to="Home">Home</Link>
                            <Link to="About">About</Link>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </nav>
    )
}

export default Navbar
