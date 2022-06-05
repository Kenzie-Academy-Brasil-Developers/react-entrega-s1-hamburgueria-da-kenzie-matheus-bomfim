import { Aside,DivName,DivInfoValue,Ul,Li,DivNames, DivVazio } from "./style";

function Cart(products,removeItem,totalValue,setCarrinho,setTotalValue,addItem,calculateTotal){
    return(
        <Aside>
            <DivName>
                <h2>Carrinho de Compras</h2>
            </DivName>
            <Ul>
                    {products.length > 0 ? products.map((item)=>{
                        return(
                            <Li key={item.id}>
                            <img src={item.img} alt="imgProduct"></img>
                            <DivNames>
                                <h2>{item.name}</h2>
                                <span>{item.category}</span>
                            </DivNames>
                            <>
                            <p onClick={(event)=>{event.preventDefault();removeItem(item,item.id,item.price)}}>-</p>
                            <p>{item.quantity}</p>
                            <p onClick={(event)=>{event.preventDefault();addItem(item);calculateTotal(item.price)}}>+</p>
                            </>
                            </Li>
                        )
                    }) : 
                        <DivVazio>
                            <h2>Sua Sacola Está Vázia</h2>
                            <span>Adicione Itens</span>
                        </DivVazio>
                    }
            </Ul>
            <DivInfoValue>
                <div>
                <h3>Total:</h3>
                <p>R$ {totalValue.toFixed(2)}</p>
                </div>
                <button onClick={(e)=>{e.preventDefault(); setCarrinho([]); setTotalValue(0)}}>Remover Todos os Items</button>

            </DivInfoValue>
        </Aside>
    )
}

export default Cart