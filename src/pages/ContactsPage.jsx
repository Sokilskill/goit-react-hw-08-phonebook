import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import MainTitle from 'components/MainTitle/MainTitle';
import { Box, Container } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector(selectContacts);
  const contactItems = items.length !== 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="section" py={6}>
      <Container maxW="lg">
        <MainTitle title="Phonebook" mb="10px" textAlign={'center'} />
        <ContactForm />
        {isLoading && !contactItems && <Loader />}
        {contactItems && (
          <>
            <MainTitle title="Contacts" textAlign="center" />
            <Filter />
            <ContactList />
          </>
        )}
      </Container>
    </Box>
  );
};
export default ContactsPage;
