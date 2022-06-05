import { Div } from "./style"

function Cards(products,functionAdd,carrinho,calculateTotal,addItem){
    return(
        products.map((e)=>{
            return(
                <Div key={e.id}>
                    <img src={e.img} alt="imgProduct"></img>
                    <div className="infos">
                    <h2>{e.name}</h2>
                    <span>{e.category}</span>
                    <p>R$ {e.price}</p>
                    <button onClick={(event)=>{event.preventDefault();addItem(e);calculateTotal(e.price)}}>Adicionar</button>
                    </div>
                </Div>
            )
        })
        )
    }


export default Cards