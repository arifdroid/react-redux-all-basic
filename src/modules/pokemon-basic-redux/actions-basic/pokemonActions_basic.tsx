import axios from 'axios';

export const GetPokemonList = (page:number)=>async(dispatch:any)=>{
    try {

        dispatch({
            type:"POKEMON_LIST_BASIC_LOADING"
        })

        let perPage = 14
        let offset = (page*perPage)-perPage;
        
        // if you page 1 , offset = 0
        // if you page 2 , offset = 15 

        console.log('perPage', perPage)
        console.log('offset', offset)

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${perPage}`)

        dispatch({
            type:"POKEMON_LIST_BASIC_SUCCESS",
            payload:res.data 
        })

    } catch (error) {
        
        dispatch({
            type:"POKEMON_LIST_BASIC_FAILED"
        })
    }
}