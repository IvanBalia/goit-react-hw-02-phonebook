import { Input } from "./Input";

export const AddContactForm = ({ addContact,onHandleChange }) => {
    return (
        <form onSubmit={addContact}>
            <Input onHandleChange={onHandleChange} />
            <button type="submit"> Додати контакт</button>
        </form>
    )
}