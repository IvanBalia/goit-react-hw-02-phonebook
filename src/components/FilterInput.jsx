export const FilterInput = ({ filterContacts }) => {
    return (<div>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={filterContacts} />
    </div>)
}