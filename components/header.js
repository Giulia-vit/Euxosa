import * as React from 'react';
import {Box,
        Button,
        Flex,
        Text,
        Stack,
        Collapse,
        Icon,
        Link,
        Popover,
        PopoverTrigger,
        PopoverContent,
        useColorModeValue,
        useBreakpointValue,
        useDisclosure 
           
    } from '@chakra-ui/react';

import "@fontsource/poppins"


export default function WithSubnavigation(){

    return(
    <Box >
        <Flex 
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH = {'80px'}
        py = {{base: 2}}
        px = {{base: 4}}
        mx={'30px'}
        borderBottom = {1}
        borderStyle = {'solid'}
        borderColor = {useColorModeValue ('gray.200', 'gray.900')}
        align= {'center'}>

            <Flex
            flex = {{base:1, md: 'auto'}}
            display = {{base: 'flex', md:'none'}}>
            </Flex>

            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

             <Button
             as={'a'}
             variant={'link'}
             href={'/'}
             textAlign={useBreakpointValue({ md: 'left' })}         //This hook also responds to the window resizing and returning the appropriate value for the new window size.
             fontSize={'2xl'}
             color={useColorModeValue('gray.300', 'white')}
             mx={'30px'}
             variant={'link'}
             as={'a'}
             href={'/'}
             _hover={{
                bgGradient:'linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%)',
                bgClip:"text"

            }}
            _focus={{
                boxShadow:'none',
            }}>
               Home
             </Button>


             <Button
             as={'a'}
             variant={'link'}
             href={'/about'}
             textAlign={useBreakpointValue({md: 'left'})}
             fontSize={'2xl'}
             color={useColorModeValue('gray.300', 'white')}
             mx={'30px'}
             _hover={{
                bgGradient:'linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%)',
                bgClip:"text"
             }}
             _focus={{
                boxShadow:'none',
            }}>
               About 
             </Button>

             <Button
             as={'a'}
             variant={'link'}
             href={'/contact'}
             mx={'30px'}
             textAlign={useBreakpointValue({md: 'left'})}
             fontSize={'1.5em'}
             color={useColorModeValue('gray.300', 'white')}
             _hover={{
                bgGradient:'linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%)',
                bgClip:"text",
                  }}
                _focus={{
                    boxShadow:'none',
                }}
                  >
               Contacts 
             </Button>


             </Flex>

            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              >

              <Button  //Sign In Button
                as={'a'}
                fontSize={'1.5em'}
                variant={'link'}
                href={'/signIn'}
                px={'20px'}
                color={useColorModeValue('gray.300', 'white')}
                mx={'50px'}
                _hover={{
                    outlineOffset:'none',
                    bgGradient:'linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%)',
                    bgClip:"text",
                }}
                _focus={{
                    boxShadow:'none',
                }}
                >
                Sign In
              </Button>


              <Button          // Sing Up Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'1.5em'}
                p={'20px'}
                py={'25px'}
                color={'gray.200'}
                href={'#'}
                border={'1px'}
                borderColor="gray.200"
                colorScheme="teal" 
                variant="outline"
                _hover={{
                    bgGradient:'linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%)',
                    bgClip:"text",
                    borderImageSource:'linear-gradient(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%)',
                }}
                _focus={{
                    boxShadow:'none',
                    bgColor:'none',
                    colorScheme:"white"
                }}
                >
                Sign Up
              </Button>


        </Stack>
      </Flex>


    </Box>
  );
}

