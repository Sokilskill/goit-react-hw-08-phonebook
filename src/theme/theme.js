import { extendTheme } from '@chakra-ui/react';

const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray', // Фоновий колір для body
        color: 'black', // Колір тексту
      },
    },
  },
  colors: {
    primary: {
      100: 'green', // Колір за замовчуванням
      200: '#ffffff', // Колір при наведенні
      300: '#FFA961', // Колір при активному посиланні
      500: 'red',
    },
  },
  bg: {
    primary: {
      100: 'grey',
      200: 'red',
      300: 'violet',
      500: 'white',
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: 'primary.100',
        transition: 'color 0.3s',
        _hover: {
          color: 'primary.200',
        },
        _active: {
          color: 'primary.300',
        },
      },
    },
    Button: {
      variants: {
        changeBg: {
          color: 'primary.100',
          bg: 'primary.200',
          transition: 'color 0,3s, bg 0,3s',
          _hover: {
            color: 'primary.300',
            bg: 'primary.500',
          },
        },
      },
    },
  },
});

export default myTheme;
