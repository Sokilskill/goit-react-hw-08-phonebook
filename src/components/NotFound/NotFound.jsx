import React from 'react';
import { extendTheme, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
});

const NotFound = () => {
  return (
    <>
      <Box as="h1" {...theme.textStyles.h1}>
        This is a box
      </Box>
      <Box as="p">
        You just hit a route that doesn't exist... the sadness.😢
      </Box>
      <Link as={RouterLink} to="/" aria-label="Back to Home">
        Back to Home
      </Link>
    </>
  );
};

export default NotFound;
