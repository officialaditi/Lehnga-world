import { Flex } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Flex as='main'
            mt='60px'
            direction='column'
            py='6'
            px='6'
            bg='gray.200'>
            <Routes>
                <Route path='/' element={<HomeScreen/>}  />
            </Routes>
            </Flex>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;