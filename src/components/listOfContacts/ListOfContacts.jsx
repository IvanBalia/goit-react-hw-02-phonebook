
import { ContactItem, DeleteButton, List } from './index';

export const ListOfContacts = ({ list, onDeleteContact }) => {
    return (
        <List>
            {list.map(contact => (
                <ContactItem key = {contact.id}>
                    <span>{contact.name}</span>
                    <span> </span>
                    <span>{contact.tel}</span>
                    <DeleteButton
                        type="button"
                        onClick={() => onDeleteContact(contact.id) }
                    >Delete</DeleteButton>
                </ContactItem>
            ))}
        </List>
    )
}