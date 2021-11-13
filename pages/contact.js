import Header from '../components/header'
import * as React from 'react'
import { CSSReset, Box, Text, ChakraProvider } from '@chakra-ui/react'

export default () => (
    <>
    <ChakraProvider>
        <CSSReset/>
        <Header/>
        <Contact/>


    </ChakraProvider>
    </>
)

const Contact =() => (
    <>
    <Box 
    border={'1px'}
    borderColor={'gray.400'}
    width={'60%'}
    height={'50em'}
    mx={'auto'}
    mt={'3em'}
    p={'3em'}
    >

        <Text
        bgGradient='linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%, rgba(233,51,156,1) 78%)'
        bgClip="text"
        fontSize="5em"
        fontWeight={'bold'}
        textAlign={'center'}
        fontFamily={'poppins'}>
            Contact Us  
        </Text>
        <Text
        textAlign={'center'}
        fontSize={'1.3em'}>
        ⚠️: We will never answer you

        </Text>

    </Box>
    </>
)