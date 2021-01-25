import ContactsList from './Components/ContactsList';
import FilterInput from './Components/FilterInput';
import PhoneBook from './Components/PhoneBook';
import Section from './Components/Section';
import './Components/styles.css';

function App() {
  return (
    <div className="main-container">
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <FilterInput />
        <ContactsList />
      </Section>
    </div>
  );
}

export default App;
