import PokemonService from "./pokemonService";

const prefix = 'POKEMON'

const pokemonActions = {

    FETCH_STARTED : `${prefix}/_FETCH_STARTED`,
    FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
    FETCH_ERROR: `${prefix}_FETCH_ERROR`,
    PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,

    doFetch : () => async(dispatch :any, getState:any)=>{

        try {

            dispatch({
                type:pokemonActions.FETCH_STARTED,
                payload:null
            })

            const response = await PokemonService.getPokemonList();
            
            
        } catch (error) {
            
        }
    }

}


export default pokemonActions;