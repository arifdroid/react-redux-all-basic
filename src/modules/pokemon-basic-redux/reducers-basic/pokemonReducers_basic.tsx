
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

export default PokemonListReducers 

