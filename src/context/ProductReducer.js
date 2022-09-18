const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      /* Se tiene que retornar un objeto */
      return {
        ...globalState,
        products: action.payload,
      };
    case "OBTENER_PRODUCTO":
      /* Se tiene que retornar un objeto */
      return {
        ...globalState, //hace una copia de como esta mi estado
        product: action.payload,
      };
    default:
      return globalState;
  }
};

export default reducer;
