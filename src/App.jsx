import { ContactForm } from "components/ui/contact_form/ContactForm";
import { Component } from "react";
import shortid from "shortid";
//import shortid from "shortid";
//import { AddContactForm } from "./components/AddContactForm";
//import { FilterInput } from "./components/FilterInput";
//import { ListOfContacts } from "./components/ListOfContacts";




export class App extends Component {
  
  state = { 
    contacts: [],
    filter:''
  };

  
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
       <ContactForm contact={this.state.contacts } />
      </div>
    )
  }
};
