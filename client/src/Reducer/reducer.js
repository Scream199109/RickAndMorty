export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTENT":
      return { ...state, content: action.payload }
    default:
      return state
  }
}
