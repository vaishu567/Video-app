import React from 'react'
import { Container, Heading, VStack,Input, Button , Avatar,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
       <Container maxW={"container.xl"} h={"100vh"} p={16} >
        <from>
            <VStack alignItems={"stretch"} spacing={8} w={["full",'96']} m={'auto'}my={16} >
                <Heading  ml={8} >Video Hub Sign Up</Heading>
                <Avatar alignSelf={"center"} boxSize={32} />
                <Input placeholder="Name" type={"text"} required focusBorderColor={"purple.500"} />

                <Input placeholder='email' type={"email"} required focusBorderColor={"purple.500"} />
                <Input placeholder='Re Enter email' type={"email"} required focusBorderColor={"purple.500"} />

                <Input placeholder='password' type='password'  focusBorderColor={"purple.500"} />


                <Button colorScheme='purple'  type={"submit"} >Sign Up</Button>

                <Text textAlign={'right'} >Already Signedup?{" "}
                    <Button  variant={"link"} colorScheme={"purple"} >
                        <Link to={'/login'} >Login</Link>
                    </Button>

                </Text>







            </VStack>
        </from>
    </Container>
  )
}

export default Signup