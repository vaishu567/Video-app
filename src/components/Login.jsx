import React from 'react'
import { Container, Heading, VStack,Input, Button ,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={16} >
        <from>
            <VStack alignItems={"stretch"} spacing={8} w={["full",'96']} m={'auto'}my={16} >
                <Heading>Welcome Back</Heading>
                <Input placeholder='email' type={"email"} required focusBorderColor={"purple.500"} />
                <Input placeholder='password' type='password'  focusBorderColor={"purple.500"} />
                <Button  variant={"link"} alignSelf={"flex-end"} ><Link to={'/forgetpassword'} >Forget password???</Link></Button>


                <Button colorScheme='purple'  type={"submit"} >Login</Button>

                <Text textAlign={'right'} >New User?{" "}
                    <Button  variant={"link"} colorScheme={"purple"} >
                        <Link to={'/signup'} >Sign Up</Link>
                    </Button>

                </Text>





            </VStack>
        </from>
    </Container>
  )
}

export default Login