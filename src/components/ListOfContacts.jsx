export const ListOfContacts = ({ list }) => {
    return (
        <ul>
            {list.map(contact => (
                <li key = {contact.id}>
                    {contact.name}
                </li>
            ))}
        </ul>
    )
}