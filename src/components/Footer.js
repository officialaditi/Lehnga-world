import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex as='footer'
        justifyContent='center'
        py='6'
        width='100%'
        fontSize='lg'
        textAlign='center'
        color='white'
        bgColor='black'>
            <Text>
                Copyright {new Date().getFullYear()}. Lehenga-World Store. All Rights Reserved.
            </Text>
           
        </Flex>
    )
}

export default Footer;