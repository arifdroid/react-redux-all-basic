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

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${perPage}`)

        dispatch({
            type:"POKEMON_LIST_BASIC_SUCCESS",
            payload:res.data.results 
        })

    } catch (error) {
        
        dispatch({
            type:"POKEMON_LIST_BASIC_FAILED"
        })
    }
}

export const GetThisPokemon = (id:string)=>async(dispatch:any)=>{
    try {

        dispatch({
            type:'POKEMON_THIS_BASIC_LOADING'
        })
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        dispatch({
            type:'POKEMON_THIS_POKEMON_SUCCESS',
            payload:res.data
        })



        
    } catch (error) {

        dispatch({
            type:'POKEMON_THIS_POKEMON_FAILED',
            
        })
        
    }
}