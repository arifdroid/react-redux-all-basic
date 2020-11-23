
const defaultState = {
    loading: false,
    data:[],
    errorMessage:""
}

const PokemonListReducers = (state = defaultState, action:any)=>{
    
    switch(action.type){

        case 'POKEMON_LIST_BASIC_LOADING':
        
        return{
            ...state,
            loading:true
        }

        case 'POKEMON_LIST_BASIC_FAILED':

        return{
            ...state,
            loading:false,
            errorMessage:'no pokemon available' 
        };

        case 'POKEMON_LIST_BASIC_SUCCESS':

        return{
            ...state,
            loading:false,
            data:action.payload, 
            
        };
        default:
            return state
    }

    

}

// const PokemonListReducer = (state = defaultState, action:any) => {
//     switch (action.type) {
//       case "POKEMON_LIST_LOADING":
//         return {
//           ...state,
//           loading: true,
//           errorMsg: ""
//         };
//       case "POKEMON_LIST_FAIL":
//         return {
//           ...state,
//           loading: false,
//           errorMsg: "unable to get pokemon"
//         };
//       case "POKEMON_LIST_SUCCESS":
//         return {
//           ...state,
//           loading: false,
//           data: action.payload.results,
//           errorMsg: "",
//           count: action.payload.count
//         };
//       default:
//         return state
//     }
//   };

export default PokemonListReducers 

