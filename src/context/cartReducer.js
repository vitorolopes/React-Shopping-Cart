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
    default:
      return prevState
  }
 }

 export default cartReducer