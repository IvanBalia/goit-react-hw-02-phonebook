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
    name: '',
    tel: '',
    filter:''
  };

  onHandleChangeName = (e) => {
    this.setState({
      name: e.currentTarget.value
    })
  };

  onHandleChangeTel = (e) => {
    this.setState({
      tel: e.currentTarget.value
    })
  };

  addContact = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, ({ id: shortid.generate(), name: this.state.name, tel: this.state.tel })] }
    });

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
       <ContactForm/>
      </div>
    )
  }
};
