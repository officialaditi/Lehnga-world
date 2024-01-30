import { Grid,  Heading} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import products from '../products';


const HomeScreen = () => {
    return (
        <>
            <Heading as='h2'
            mt='5'
            mb='5'
            textDecor='underline' 
            fontSize={{base: '20px', md: '30px', lg: '30px'}}
            textAlign='center'
            fontWeight='bold'
            letterSpacing='wide'
            >
            Latest Product
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr ", lg: '1fr 1fr 1fr 1fr' }}
              gap="8"
            >

            {products.map((prod) => (
                <ProductCard key = {prod._id} product={prod}/>
            ))}

            </Grid>
        </>
    )
}

export default HomeScreen;