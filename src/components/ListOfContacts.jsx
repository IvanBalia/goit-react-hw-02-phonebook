export const ListOfContacts = ({ list,deleteContact }) => {
    return (
        <ul>
            {list.map(contact => (
                <li key = {contact.id}>
                    <span>{contact.name}</span>
                    <span> </span>
                    <span>{contact.tel}</span>
                    <button type="button" onClick={()=>deleteContact()}>delete</button>
                </li>
            ))}
        </ul>
    )
}