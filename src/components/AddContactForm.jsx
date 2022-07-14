import { Input } from "./Input";
import { InputTel } from "./InputTel";

export const AddContactForm = ({ addContact,onHandleChange, onHandleChangeTel }) => {
    return (
        <form onSubmit={ addContact }>
            <Input onHandleChange={onHandleChange} />
            <InputTel onHandleChangeTel={onHandleChangeTel}/>
            <button type="submit"> Додати контакт</button>
        </form>
    )
}