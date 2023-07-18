import React from 'react';
import { Box, Heading , Image ,Container,Stack,Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:"4",
    size:"3xl"

}


const Home = () => {
  return (
    <Box>
    <MyCarousel/>
    <Container minH={"100vh"} maxW={'container.xl'} p="16" >
        <Heading textTransform={"uppercase"} py={2}  borderBottom={"2px solid"} 
        w={"fit-content"} m={'auto'} >Services</Heading>
        <Stack h="full" p={4} alignItems={"center"} direction={["column","row"]} >
          <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4','16']} textAlign={"center"} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, 
          tempora at officia obcaecati possimus reiciendis fugit, minus voluptatum
           quas quia dolorem rem? Neque autem hic optio ipsam dolores possimus numquam
            eaque similique, rerum nemo ex quibusdam. Blanditiis dicta ducimus ipsam
             eveniet eius nisi id consequatur natus quo, corrupti iusto laudantium neque
              itaque sapiente, eaque reiciendis unde ex consectetur corporis voluptas error
               illum! Culpa, iusto ipsa ducimus quidem, dolor molestiae quam porro et iure
                hic consequuntur reiciendis error doloribus repellendus at quia! Aspernatur,
                 ab a officia veniam, quisquam in quas dolores beatae deleniti accusantium
                  doloremque dicta placeat mollitia, nam repellat? Sit fuga molestiae est 
                  distinctio, earum assumenda ullam amet, dolore cupiditate nulla corrupti,

          </Text>
        </Stack>

    </Container>
    </Box>
  )
};

const MyCarousel=()=>{
    return(
    <Carousel
     autoPlay 
     infiniteLoop 
     interval={2000}
      showStatus={false} 
      showThumbs={false} 
      showArrows={false}>

      <Box w="full" h={'100vh'} >
        <Image src={img1}/>
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions} >
            Watch The Future
        </Heading>
      </Box>
      <Box w="full" h={'100vh'} >
        <Image src={img2}/>
        <Heading bgColor={"whiteAlpha.600"} color={'white'} {...headingOptions} >
            Future is Gaming
        </Heading>
      </Box>
      <Box w="full" h={'100vh'} >
        <Image src={img3}/>
        <Heading bgColor={"blackAlpha.800"} color={'white'} {...headingOptions} >
            Gaming on console
        </Heading>
      </Box>
      <Box w="full" h={'100vh'} >
        <Image src={img4}/>
        <Heading bgColor={"blackAlpha.700"} color={'white'} {...headingOptions} >
            Night Life is cool
        </Heading>
      </Box>

    </Carousel>
    )
}



export default Home