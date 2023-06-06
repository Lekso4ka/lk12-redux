import {useSelector, useDispatch} from "react-redux";
import Product from "./Product";

const ProductList = () => {
    const data = useSelector(state => state.product.data);
    const dispatch = useDispatch();

    return <>
        <h2>Список продуктов</h2>
        <table style={{borderStyle: "solid"}}>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена за кг(шт)</th>
                    <th>Опции</th>
                </tr>
            </thead>
            <tbody>
                {data.map((el, i) => <Product key={i} {...el}/>)}
            </tbody>
        </table>
        <button onClick={() => dispatch({type: "CLEAR"})}>Сжечь склад</button>
    </>
}

export default ProductList;