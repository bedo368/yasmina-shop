export const addItemUtalits = (state, action) => {
  const itemToAddId = action.payload._id
  const exisitingItem = state.cartItems.find((item) => item._id === itemToAddId)
  if (exisitingItem) {
    return {
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item._id === itemToAddId) {
          return { ...action.payload }
        } else {
          return item
        }
      }),
    }
  } else {
    return { ...state, cartItems: [...state.cartItems, action.payload] }
  }
}
