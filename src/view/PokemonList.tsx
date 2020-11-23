import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// https://stackoverflow.com/questions/55636963/property-does-not-exist-on-type
import _ from 'lodash';
import { GetPokemonList } from '../modules/pokemon-basic-redux/actions-basic/pokemonActions_basic';
const PokemonList = ()=>{

    const dispatch = useDispatch();
    const pokemonList = useSelector((state:any)=> state.PokemonList );


    useEffect(()=>{ 
        //calll method that dispatch action
        FetchData(1)
    },[])

    const FetchData = (page=1)=>{
        //dispatch action         
        dispatch(GetPokemonList(page))
    }

    //listener to state changes
    const showData = ()=>{
        if(!_.isEmpty(pokemonList.data)){
            return <p> have data </p>
        }

        if( pokemonList.loading){
            return <p>loading ...</p>
        }

        if(pokemonList.errorMessage !== ''){
            return <p>{ } </p>
        }
    }
    
    return(

        <div >

            Pokemon List:

            {showData()}

        </div>
    
    )
}

export default PokemonList