import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetThisPokemon } from '../modules/pokemon-basic-redux/actions-basic/pokemonActions_basic';


const Pokemon = (props :any) =>{

    const dispatch = useDispatch();
    const pokemonDetails = useSelector((state:any)=> state.ThisPokemon)

    useEffect(()=>{

        console.log('data passed is', props)
        FetchData(props.match.params?props.match.params.id:null);
        

    },[])

    const FetchData = (id:any)=>{
        dispatch(GetThisPokemon(id));
    }

    
    const showData = ()=>{
        console.log('pokemon details is', pokemonDetails)
    }
    // console.log('props pokemon passed ->', props )

    return(

        <div>
                this is pokomen states: 

                {showData()}
        </div>
    )
}

export default Pokemon;
