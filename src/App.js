import { useSelector } from "react-redux"
import ProductList from "./components/ProductList";

const App = () => {
  const data = useSelector(state => state)
  console.log(data);
  return (<>
      <h1>Redux</h1>
      <ProductList/>
    </>)
}

export default App;
