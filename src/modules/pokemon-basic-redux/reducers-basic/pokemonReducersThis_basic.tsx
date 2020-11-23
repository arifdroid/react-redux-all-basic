const defaultState = {
    loading:false,
    data:{},
    errorMsg:""
}

//function of reducer is to change the state
const ThisPokemonReducers = (state=defaultState, action: any)=>{

    switch(action.type){

        case 'POKEMON_THIS_BASIC_LOADING':
            return{
                ...state,
                loading:true
            }

        case 'POKEMON_THIS_POKEMON_SUCCESS':

        return{
            ...state,
            data:action.payload
        }

        case 'POKEMON_THIS_POKEMON_FAILED':
            return{
                ...state,
                errorMsg:'loading data this pokemon failed'
            }


        default:
            return state;
    }
}

export default ThisPokemonReducers;