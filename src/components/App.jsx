import { Component } from "react";
import shortid from "shortid";
//import shortid from "shortid";
import { AddContactForm } from "./AddContactForm";
import { ListOfContacts } from "./ListOfContacts";




export class App extends Component {
  
  state = {
    contacts: [],
    name: '',
    tel:''
  };

  onHandleChange = (e) => {
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
      return { contacts: [...prevState.contacts,({ id: shortid.generate(), name: this.state.name,tel:this.state.tel })]}
    });
    console.log(this.state.contacts);
  }
  
  render() {
   return  (
      <div>
       <AddContactForm addContact={this.addContact} onHandleChange={this.onHandleChange} onHandleChangeTel={this.onHandleChangeTel} />
       <ListOfContacts list={ this.state.contacts} />
      </div>
    )
  }
};
