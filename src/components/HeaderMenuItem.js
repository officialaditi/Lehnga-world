import { Link } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';


const HeaderMenuItem = ({icon, label, url}) => {
    return ( 
        <Link as={RouterLink}
              to={url}
        fontSize='md'
        letterSpacing='wide'
        textTransform='uppercase'
        mr='6'
        display='flex'
        alignItems='center'
        color='Black'
        mb={{base: '2', md: '0'}}
        _hover={{textDecor: 'none', color: 'Red'}}>
            {icon}
            {label}
        </Link>
    );
};

export default HeaderMenuItem;