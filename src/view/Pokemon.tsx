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
         
        let {name, height, weight , abilities} = pokemonDetails.data;
        // let {} = pokemonDetails 

        return(
        <div>

        <h1>name : {name}</h1>
        <h3>height : {height}</h3>
        <h3>weight : {weight}</h3>

        <h3>abilities : {abilities.map((el:any, index:number)=>(
            <div key={index}><p>{index} : {el.ability.name}</p></div>
        ))}</h3>  

        </div>

            
        
        
        )
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
