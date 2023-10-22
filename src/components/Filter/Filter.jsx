import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { inputFilter } from 'redux/contacts/filterSlice';
import { Box } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const handlerInputFilter = e => {
    const { value } = e.target;
    dispatch(inputFilter(value));
  };

  return (
    <Box py={4} textAlign="center">
      <label htmlFor="filter" className={css.label}>
        Find contacts by name:
      </label>

      <input
        id="filter"
        className={css.input}
        type="text"
        name="filter"
        onChange={handlerInputFilter}
      />
    </Box>
  );
};

export default Filter;
