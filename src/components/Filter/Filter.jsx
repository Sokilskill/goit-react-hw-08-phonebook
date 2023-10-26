import React from 'react';
import { useDispatch } from 'react-redux';
import { inputFilter } from 'redux/contacts/filterSlice';
import { Flex, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const handlerInputFilter = e => {
    const { value } = e.target;
    dispatch(inputFilter(value));
  };

  return (
    <Flex direction={'column'} align={'center'} py={4}>
      <FormLabel htmlFor="filter" marginInlineEnd="unset">
        Find contacts by name:
      </FormLabel>

      <Input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerInputFilter}
        bg={'white'}
        width={'min'}
        p={2}
        border={'1px solid #ccc'}
        mb="10px"
      />
    </Flex>
  );
};

export default Filter;
