export const cartReducer = (prevState, action) => { 
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

export const filterReducer = (prevState, action) => {
  switch(action.type){
    case "SORT_BY_PRICE":{
      const newState = {
        ...prevState,
        sortIn:action.payload
      }
      return newState
    }

    case "FILTER_BY_STOCK":{
      const newState = {
        ...prevState,
        byStock: !prevState.byStock
      }
      return newState
    }

    case "FILTER_BY_FAST_DELIVERY":{
      const newState = {
        ...prevState,
        byFastDelivery: !prevState.byFastDelivery
      }
      return newState
    }

    case "FILTER_BY_RATING":{ 
      const newState = {
        ...prevState,
        byRating: action.payload
      }
      return newState
    }

    case "CLEAR_FILTERS":{
      const newState = {
        ...prevState,
        sortIn: undefined,
        byStock: false,
        byFastDelivery: false,
        byRating: 0
      }
      return newState
    }


    default:
      return prevState
  }
}