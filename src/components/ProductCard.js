import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box borderRadius="lg" bgColor="white" _hover={{ shadow: "md" }}>
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="430px"
          objectFit="cover"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />

        <Flex py="2" direction="column" justifyContent="space-between">
          <Heading as="h3" fontSize="lg" mb="3" textAlign="center">
            {product.name}
          </Heading>

          <Flex alignItem="center" justifyContent="space-between">
            <Rating color="yellow.600" ml="3" value={product.rating} />

            <Text fontSize="2xl" fontWeight="bold" color="blue.600" mr="3">
              {product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
