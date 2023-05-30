import { useDispatch } from "react-redux";

import { } from "../../store/actions/basketActions";

const Row = ({
    index,
    name,
    price,
    id, 
    cnt
}) => {
    const dispatch = useDispatch();

    return <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>
            <button disabled={cnt <= 1}>-</button> {cnt} <button>+</button>
        </td>
        <td>{price * cnt} ₽</td>
        <td>
            <button>Удалить</button>
        </td>
    </tr>
}

export default Row;