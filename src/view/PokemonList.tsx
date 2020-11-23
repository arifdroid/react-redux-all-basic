import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// https://stackoverflow.com/questions/55636963/property-does-not-exist-on-type
import _ from 'lodash';
import { GetPokemonList } from '../modules/pokemon-basic-redux/actions-basic/pokemonActions_basic';
import { Link } from 'react-router-dom';
import './PokemonList.css' 
const PokemonList = () => {

    const dispatch = useDispatch();
    const pokemonList = useSelector((state: any) => state.PokemonList);


    useEffect(() => {
        //calll method that dispatch action
        FetchData(1)
    }, [])

    const FetchData = (page = 1) => {
        //dispatch action         
        dispatch(GetPokemonList(page))
    }

    //listener to state changes
    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {

            // console.log('data is ',pokemonList.data)
            return (
                <div>
                    <p>have data </p>
                    <br></br>
                    {
                        pokemonList.data.map((el: any, index: any) => (                        
                            <div key={index}  className="list-wrapper">
                                <div className='pokemon-item-2'>
                                <br />
                                <p> pokemon : {el.name}</p>
                                {/* <span/> */}
                                <div className='pokemon-item-3'>
                                <Link to={`/poke-list/${(index+1)}`}>View {index}</Link>
                                </div>
                                </div>
                                <br/>
                            </div>

                        ))
                    }
                </div>
            )
        }

        if (pokemonList.loading) {
            return <p>loading ...</p>
        }

        if (pokemonList.errorMessage !== '') {
            return <p>{ } </p>
        }
    }

    return (

        <div >

            Pokemon List:

            {showData()}

        </div>

    )
}

export default PokemonList