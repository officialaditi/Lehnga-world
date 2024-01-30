import { Link } from '@chakra-ui/react';


const HeaderMenuItem = ({icon, label, url}) => {
    return ( 
        <Link href={url}
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