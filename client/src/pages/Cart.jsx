import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart(){

const{

cart,

increaseQuantity,

decreaseQuantity,

removeFromCart

}=useContext(CartContext);

const total=cart.reduce(

(sum,item)=>sum+item.price*item.quantity,

0

);

return(

<div style={{padding:"120px 8%"}}>

<h1>Shopping Cart</h1>

{

cart.length===0

?

<h2>Your Cart is Empty</h2>

:

<>

{

cart.map(item=>(

<div

key={item._id}

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

margin:"25px 0",

padding:"20px",

background:"#fff",

borderRadius:"12px",

color:"#000"

}}

>

<img

src={item.image}

width="100"

/>

<div>

<h3>{item.name}</h3>

<p>₹{item.price}</p>

</div>

<div>

<button

onClick={()=>decreaseQuantity(item._id)}

>

-

</button>

<span

style={{margin:"15px"}}

>

{item.quantity}

</span>

<button

onClick={()=>increaseQuantity(item._id)}

>

+

</button>

</div>

<h3>

₹{item.price*item.quantity}

</h3>

<button

onClick={()=>removeFromCart(item._id)}

>

❌

</button>

</div>

))

}

<h2>

Grand Total : ₹{total}

</h2>

<button>

Proceed To Checkout

</button>

</>

}

</div>

)

}

export default Cart;