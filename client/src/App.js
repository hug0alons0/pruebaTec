import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from './config/axios';
import ProductosTabla from './Components/TableProducts';
import ProductInfo from './Components/ProductInfo';



function App() {
  //State

  const [Product, getProducts] = useState([]);
  const [productInformacion, daProductInformacion] =useState([]);

  useEffect(()=> {
      const fetchApi = ()=>{
        axios.get('/products')
        .then(respuesta =>{
          getProducts(respuesta.data)
        })
    
    fetchApi();
  }
}, [productInformacion] );

  function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [productInformacion,daProductInformacion] = useState(10);
  useEffect(() => {
    async function fetchMyAPI(){
      let response = await axios.get('/products')
      console.log(response.data)
      setProducts(response.data)
      setCart(false)
    }
    if(cart === true){
      fetchMyAPI()
    }
  }, [cart])

  console.log(products)//aquí tengo todos los productos



  return (
    <Router>
    <Switch>
        <Route 
            exact 
            path="/"
            component={()=> <ProductosTabla Product={Product}/>}
        />
        <Route 
            exact 
            path="/info"
            render={(props)=>{
              const productInformacion = Product.filter(articulo => Product._id === props.match.params.id)
              return (
                <ProductInfo
                product={[0]}
                daProductInformacion={daProductInformacion}
                />
              )
            }}
        />
    </Switch>
</Router>
  )
}
}
export default App;
