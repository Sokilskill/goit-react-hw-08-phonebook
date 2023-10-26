import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

const MainTitle = ({ title, textAlign, mb }) => {
  return (
    <Heading as={'h2'} textAlign={textAlign} mb={mb}>
      {title}
    </Heading>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  mb: PropTypes.string,
};

export default MainTitle;
