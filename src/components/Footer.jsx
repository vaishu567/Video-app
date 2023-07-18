import React from 'react'
import {Box,Stack, VStack ,Heading, HStack, Button , Input,Text} from '@chakra-ui/react'
import { AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={16} color={'white'} >
        <Stack direction={['column','row']} >
        <VStack alignItems={"stretch"} w={"full"} px={4} >
            <Heading size={"md"} textTransform={"uppercase"} >
                Subscribe to get more updates

            </Heading>
            <HStack>
                <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                <Button p={0} colorScheme="purple" variant={"ghost"} borderRadius={'0 20px 20px 0'} >
                    <AiOutlineSend/>
                </Button>
            </HStack>
        </VStack>
        <VStack w={"full"} borderLeft={["none",'1px solid white']} borderRight={['none','1px solid white']} >
            <Heading textTransform={'uppercase'} textAlign={'center'} >VIDEO HUB</Heading>
            <Text>All rights reserved</Text>

        </VStack>
        <VStack w={"full"} >
        <Heading size={'md'} textTransform={'uppercase'} >Social Media</Heading>
        <Button variant={"link"} colorScheme="purple" >
            <a target='blank' href="https://youtube.com/6packprogrammer">
                YouTube
            </a>
        </Button>
        <Button variant={"link"} colorScheme="purple" >
            <a target='blank' href="https://youtube.com/6packprogrammer">
                Instagram
            </a>
        </Button>
        <Button variant={"link"} colorScheme="purple" >
            <a target='blank' href="https://youtube.com/6packprogrammer">
                GitHub
            </a>
        </Button>
        </VStack>


        </Stack>

    </Box>
  )
}

export default Footer