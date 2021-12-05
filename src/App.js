import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';
import './App.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitData = ({ name, number }) => {
    let variable = true;
    const newItem = { id: nanoid(), name: name, number: number };
    this.state.contacts.forEach(el => {
      if (el.name === name) {
        alert(`${name} is already in contacts`);
        variable = false;
      }
    });
    if (variable === true) {
      this.setState(prevStates => ({
        contacts: [...prevStates.contacts, newItem],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContacts = () => {
    const { filter, contacts } = this.state;
    let arrayContacts = contacts;
    const toLowerCaseFilter = filter.toLowerCase();
    const renderFilter = contacts.filter(el =>
      el.name.toLowerCase().includes(toLowerCaseFilter),
    );
    if (filter.length > 0) {
      arrayContacts = renderFilter;
    }
    return arrayContacts;
  };

  deleteContact = e => {
    const currentId = e.target.id;
    // const contacts = this.state.contacts;
    // contacts.forEach((el, index) => {
    //     if(el.id === currentId){
    //         return contacts.splice(index,1)
    //     }
    // })
    // this.setState({
    //     contacts: contacts
    // })
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== currentId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <main className="main">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          renderContacts={this.renderContacts()}
          deleteContact={this.deleteContact}
        />
      </main>
    );
  }
}

export default App;
