import { ContactForm } from "components/ui/contact_form/ContactForm";
import { Component } from "react";
import shortid from "shortid";
import { Filter } from "components/ui/filter/Filter";
import { ListOfContacts } from "components/ListOfContacts";
//import shortid from "shortid";
//import { AddContactForm } from "./components/AddContactForm";
//import { FilterInput } from "./components/FilterInput";
//import { ListOfContacts } from "./components/ListOfContacts";




export class App extends Component {
  
  state = { 
    contacts: [],
    filter:''
  };

  addContact = (values, { resetForm }) => {
    values.id = shortid.generate();
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, values] }
    });
    console.log(this.state.contacts);
    resetForm();
  }

  
  filterContacts = (e) => {
    this.setState({ filter: e.currentTarget.value });

  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts= contacts.filter(
      contact => contact.name.toLowerCase()
        .includes(normalizedFilter));
    if (filteredContacts.length > 0)
    { return filteredContacts }
    else
    {return this.state.contacts}  

  };
  
    
  
  render() {
   return  (
     <div>
       <h1>Phonebook</h1>
       <ContactForm onHandleSubmit={this.addContact} />
       <h2>Contacts</h2>
       <Filter onHandleChange={this.filterContacts} value={this.state.filter} />
       <ListOfContacts list={this.getVisibleContacts()} />
      </div>
    )
  }
};
