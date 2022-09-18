const reducer = (globalState, action) => {
    switch(action.type){

        case "OBTENER_PRODUCTOS":
            /* Se tiene que retornar un objeto */
            return {
                ...globalState,
                products: action.payload,
              };

        default:
            return globalState;
    }
};

export default reducer;