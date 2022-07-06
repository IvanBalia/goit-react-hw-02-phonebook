export const ListOfContacts = ({ list }) => {
    return (
        <ul>
            {list.map(contact => (
                <li key = {contact.id}>
                    <span>{contact.name}</span>
                    <span> </span>
                    <span>{contact.tel}</span>
                </li>
            ))}
        </ul>
    )
}