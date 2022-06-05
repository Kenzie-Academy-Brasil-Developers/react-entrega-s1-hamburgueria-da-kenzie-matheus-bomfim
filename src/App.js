import './App.css';
import { useState,useEffect } from 'react';
import Api from "./Services/API"
import Cards from './Components/Cards/Cards';
import Cart from './Components/Cart';
function App() {
  const [productsCards,setProductsCards] = useState([])
  const [pesquisa,setPesquisa] = useState("")
  const [carrinho,setCarrinho] = useState([])
  const [totalValue,setTotalValue] = useState(0)
  const [filter,setFilter] = useState([])
  
  function calculateTotal(price){
    setTotalValue(carrinho.reduce((a,b) => {return a + Number(b.price * b.quantity)},price))
  }

  function pesquisarItems(){
    setFilter(productsCards.filter(({name}) => {for(let i = 0;i < productsCards.length;i++)
    {return name[i].toLowerCase() === pesquisa[i].toLowerCase()}}))
  }

  function addItem(obj){
    const filterCarrinho = carrinho.filter((e)=>{return e.name === obj.name})
    if(filterCarrinho.length > 0){
      const newFilterCarrinho = carrinho.filter((e)=>{return e.name !== obj.name});
      setCarrinho([...newFilterCarrinho,{...obj,quantity:filterCarrinho[0].quantity + 1}])
    }
    else{
      setCarrinho([...carrinho,{...obj,quantity:1}])
    }
  }
  
  function removeItem(obj,id,price){
    const filterCarrinho = carrinho.filter((e)=>{return e.name === obj.name})
    if(obj.quantity > 1){
      const newFilterCarrinho = carrinho.filter((e)=>{return e.name !== obj.name});
      setCarrinho([...newFilterCarrinho,{...obj,quantity:filterCarrinho[0].quantity - 1}])
      setTotalValue(totalValue - Number(price))
    }
    
    else{
    setCarrinho(carrinho.filter((e)=>{
      return e.id !== id
    }))
    setTotalValue(totalValue - Number(price))
  }
  
}
  
  useEffect(()=>{
    Api.get("/products").then(res => setProductsCards(res.data)).catch(err => console.error(err))
  },[])
    
  return (
    <div className="App">
      <header>
        <div className='logo'>
      <h1>Burguer</h1>
      <p className='logo2'>Kenzie</p>
        </div>
        <form onClick={(e)=>{e.preventDefault()}}>
      <input type="text" placeholder='Digite Aqui o que Procura' 
      onChange={(e)=>{e.preventDefault();setPesquisa(e.target.value);pesquisarItems()}}></input>
      <button className='pesquisar' onClick={(e)=>{e.preventDefault();pesquisarItems()}}>Pesquisar</button>
        </form>
      </header>
      <main>
        <div className='cards'>
      {pesquisa.length  > 0 ? Cards(filter,setCarrinho,carrinho,calculateTotal,addItem) : Cards(productsCards,setCarrinho,carrinho,calculateTotal,addItem)}
        </div>
      {Cart(carrinho,removeItem,totalValue,setCarrinho,setTotalValue,addItem,calculateTotal)}

      </main>
    </div>

  );
}

export default App;
