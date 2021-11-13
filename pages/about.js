import * as React from 'react';
import { ChakraProvider, Box, CSSReset, Text } from '@chakra-ui/react';
import Header from '../components/header'


export default () => (
    <>
    <ChakraProvider>
        <CSSReset/>
        <Header/>
        <About/>
    </ChakraProvider>
    </>
)

const About = () => {
    return(
        <Box
        border={'1px'}
        borderColor={'gray.300'}
        width={'60%'}
        mt={'3em'}
        height={'50em'}
        mx={'auto'}
        p={'3em'}>

            <Text
            bgGradient='linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%, rgba(233,51,156,1) 78%)'
            bgClip="text"
            fontSize="5em"
            fontWeight={'bold'}
            textAlign={'center'}
            fontFamily={'poppins'}
           >
                About EuXOsa
            </Text>

            <Text
            fontSize={'10em'}
            fontWeight={'bold'}
            textAlign={'center'}>
                ...
            </Text>

        </Box>
    )
}