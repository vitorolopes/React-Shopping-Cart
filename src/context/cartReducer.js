const cartReducer = (prevState, action) => { 
  switch(action.type){
    case "ADD_TO_CART":{
      const newState = {
        ...prevState,
        cart: [...prevState.cart, {...action.payload, qty: 1}]
      }
      return newState
    }

    case "REMOVE_FROM_CART":{
      const newState = {
        ...prevState,
        cart: prevState.cart.filter( el => el.id !== action.payload )
      }
      return newState
    }

    case "CHANGE_CART_QUANTITY": 
      const newState = {
        ...prevState,
        cart: prevState.cart.filter(item=>
          item.id === action.payload.id ? (item.qty = action.payload.qty) : (item.qty)
        )
      }
      return newState
  

    default:
      return prevState
  }
 }

 export default cartReducer