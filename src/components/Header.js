import { Flex, Link, Heading, Box , Icon} from "@chakra-ui/react";
import {HiMenu, HiShoppingBag, HiUserCircle} from 'react-icons/hi';
import { useState } from "react";
import HeaderMenuItem from "./HeaderMenuItem";

const Header = () => {
    const [show, setShow] = useState(false)
  return (
    <Flex as='header'
    align='center'
    justifyContent='space-between'
    wrap='wrap'
    py='6'
    px='6'
    bgColor='white'
    w='100%'
    pos='fixed'
    top='0'
    left='0'>
    
      <Link href="/">
        <Heading
          as="h1"
          color="Red"
          fontWeight="bolder"
          fontSize={{base: '20px'}}
          letterSpacing="wide"
          _hover={{ textDecor: "none", color: "red" }} >
          Lehenga-World
        </Heading>
      </Link>

      <Box display={{base: 'block', md: 'none'}}
      onClick={()=> setShow(!show)}>
      <Icon as={HiMenu} color='black' w='6' h='6'/>
      </Box>
 
      <Box display={{base: show ? 'block' : 'none', md: 'flex'}}
      width={{base: 'full', md: 'auto'}}
      mt={{base: '3', md: '0'}}>

      <HeaderMenuItem url='/ShoppingBag'
      label='My-Bag'
      icon={<Icon as={HiShoppingBag} mr='4' w='6' h='6'/>}>
      </HeaderMenuItem>

      <HeaderMenuItem url='/Login'
      label='Login'
      icon={<Icon as={HiUserCircle} mr='4' w='6' h='6' />}>

      </HeaderMenuItem>

      </Box>

    </Flex>
  );
};

export default Header;
