import {useSelector, } from "react-redux";

import Row from "./Row";

const Basket = () => {
    const data = useSelector(state => state.basket.value);

    return <>
        <h2>Товары в корзине</h2>
        <table>
            <tbody>
                {data.map((el, i) => <Row key={i} {...el} index={i+1}/>)}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" style={{textAlign: "right"}}>СУММА:</td>
                    <td>{
                        data.reduce((acc, el) => {
                            return acc + el.cnt * el.price
                        }, 0)
                    }</td>
                </tr>
            </tfoot>
        </table>
    </>
}

export default Basket;