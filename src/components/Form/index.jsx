import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/productActions";

const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("Огурец");
    const [price, setPrice] = useState(40);

    const sendForm = (e) => {
        e.preventDefault();
        dispatch(addProduct({
            name,
            price
        }));
        setName("");
        setPrice(1);
    }
    
    return <>
        <h2>Добавить на склад</h2>
        <form onSubmit={sendForm}>
            <input 
                placeholder="Проукт"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                placeholder="Цена" 
                type="number"
                value={price}
                min={1}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    </>
}

export default Form;