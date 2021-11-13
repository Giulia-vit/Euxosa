import Header from '../components/header';
import "@fontsource/poppins"
import * as React from 'react';
import { ChakraProvider, Box, CSSReset, Text } from '@chakra-ui/react';


export default () =>(
<ChakraProvider>
       <CSSReset/>  
             <Header/>
             <Entrance/>
               
</ChakraProvider>
)



const Entrance = () => {
  return(
    <>
    <Box textAlign={'center'}>
      <Text
        bgGradient='linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%, rgba(233,51,156,1) 78%)'
        bgClip="text"
        fontSize="17em"
        fontFamily={'poppins'}
        p={'0.4em'}
        >
        EuXOsa
      </Text>


    </Box>
    </>
  )

}






