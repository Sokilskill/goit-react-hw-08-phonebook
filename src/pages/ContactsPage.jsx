import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import MainTitle from 'components/MainTitle/MainTitle';

const ContactsPage = () => {
  return (
    <>
      <MainTitle title="Phonebook" />
      <ContactForm />
      <MainTitle title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
