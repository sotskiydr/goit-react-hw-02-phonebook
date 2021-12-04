import React from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  formSubmitData = ({ name, number }) => {
    const newItem = { id: nanoid(), name: name, number: number };
    this.setState((prevStates) => ({
      contacts: [...prevStates.contacts, newItem],
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitData} />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((el) => {
            return (
              <li key={el.id}>
                {el.name}: {el.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
