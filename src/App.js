import { Flex } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';


const App = () => {
    return(
        <div>
            <Header/>
            <Flex as='main'
            mt='60px'
            direction='column'
            py='6'
            px='6'
            bg='gray.200'>
                <HomeScreen/>
            </Flex>
            <Footer/>
        </div>
    )
}

export default App;